import express, { Request, Response, NextFunction } from "express"
import fs from "fs"
const usersRouter = express.Router()

// const users = [
//     {
//       "balance": "$3,946.45",
//       "picture": "http://placehold.it/32x32",
//       "age": 23,
//       "name": "Bird Ramsey",
//       "gender": "male",
//       "company": "NIMON",
//       "email": "birdramsey@nimon.com"
//     },
//     {
//       "balance": "$2,499.49",
//       "picture": "http://placehold.it/32x32",
//       "age": 31,
//       "name": "Lillian Burgess",
//       "gender": "female",
//       "company": "LUXURIA",
//       "email": "lillianburgess@luxuria.com"
//     },
//     {
//       "balance": "$2,820.18",
//       "picture": "http://placehold.it/32x32",
//       "age": 34,
//       "name": "Kristie Cole",
//       "gender": "female",
//       "company": "QUADEEBO",
//       "email": "kristiecole@quadeebo.com"
//     },
//     {
//       "balance": "$3,277.32",
//       "picture": "http://placehold.it/32x32",
//       "age": 30,
//       "name": "Leonor Cross",
//       "gender": "female",
//       "company": "GRONK",
//       "email": "leonorcross@gronk.com"
//     },
//     {
//       "balance": "$1,972.47",
//       "picture": "http://placehold.it/32x32",
//       "age": 28,
//       "name": "Marsh Mccall",
//       "gender": "male",
//       "company": "ULTRIMAX",
//       "email": "marshmccall@ultrimax.com"
//     }
//   ]
  

function getUsers(){
    let users = JSON.parse(fs.readFileSync("./data/users.js", "utf8"));
    return users
}

usersRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json({ result: getUsers(), message: "the result is ok!!" })
    } catch (error) {
        res.status(500).send("something went wrong!")
    }
})

const users = getUsers()

usersRouter.get("/email/:email", (req, res) => {
    const user = users.find((c: any): boolean => c.email === req?.params?.email)
    console.log(user)
    if (user) return res.json(user)
    else return res.status(404).send("user not found")
})

usersRouter.get("/gender/:gender", (req, res) => {
    const gender = users.filter((c: any): boolean=> c.gender === req?.params?.gender)
    console.log(gender)
    if (gender) return res.json(gender)
    else return res.status(404).send("users not found")
})

usersRouter.get("/delete/:email", (req, res) => {
    let updatedUsers = users.filter((c: any): boolean => c.email !== req?.params?.email);
  console.log(updatedUsers)
    fs.writeFile("./data/users.js",`${JSON.stringify(updatedUsers)}` , function(error){
        if(error) throw error;     
    });
    let data:string = fs.readFileSync("./data/users.js", "utf8")
    if (data) return res.json(data)
 
    //  return res.status(404).send("not found")
})





export { usersRouter }