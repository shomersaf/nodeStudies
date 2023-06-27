import { validationResult } from "express-validator";
import Role from "./models/Role.js";
import User from "./models/User.js";
import bcrypt from 'bcryptjs'
import jwt  from 'jsonwebtoken'
import { secret } from "./config.js";


const generateAccessToken = (id,roles)=>{
 const payload ={
  id,
  roles
 }
 return jwt.sign(payload, secret, {expiresIn: "24h"} )
}

class authControler {

  async registration(req, res) {
    try {
        const errors =validationResult(req)
        if (!errors.isEmpty()){
          return res.status(400).json({message:"Registration error", errors})
        }
        const {username, password} = req.body;
        const candidate = await User.findOne({username})
        if (candidate) {
            return res.status(400).json({message: "Пользователь с таким именем уже существует"})
        }
        const hashPassword = bcrypt.hashSync(password, 7);
        const userRole = await Role.findOne({value:"USER"})
        // const userRole = await Role.findOne({value:"ADMIN"})
        const user = new User({username, password: hashPassword, roles: [userRole]})
        await user.save()
        return res.json({message: "Пользователь успешно зарегистрирован"})
    } catch (e) {
        console.log(e)
        res.status(400).json({error: e.message})
    }
}




  async login(req, res) {
    try {
      const {username, password} = req.body;
      const user = await User.findOne({username})
      if(!user){
        return res.status(400).json({message: `Пользователь с именем ${user} не найден`})
      }
      const validPassword = bcrypt.compareSync(password, user.password)
      if(!validPassword){
        return res.status(400).json({message: `The password entered isn't valid! Yohoho!`})
      }
      const token = generateAccessToken(user._id, user.roles)
      return res.json({token})
    } catch (e) {
      console.log(e);
      res.status(400).json({message:"Login error"})
    }
  }



  async getUsers(req, res) {
    try {
      //the following code is to be used only on creating db
      // it must be slashed after
      // const userRole = new Role()
      // const adminRole = new Role({value: 'ADMIN'})
      // await userRole.save()
      // await adminRole.save()
      
      const users = await User.find()
      res.json(users)
    } catch (e) {
      console.log(e);
    }
  }
}


export default new authControler()