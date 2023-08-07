

import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from 'primereact/button';
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
    interface ILogin {
        email: string,
        password: string
    }
    const { register, handleSubmit, formState: { errors },reset,getValues } = useForm<ILogin>({mode:'onChange'})
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<ILogin> = (data) => {
        console.log(`checking up the email ${data.email} to be logged in`)
        postLogin()
        reset()
    }


    async function postLogin() {
        try{
            const result = await axios.post(`http://localhost:4001/login`, {
            email:getValues('email'),
            password:getValues('password')})
            result?.data? alert(`User is logged in`): new Error()
           
            localStorage.setItem("token", result.data.token)
            setTimeout(() => { navigate("/products") }, 500)
        }catch(e){
            alert("Something went wrong! Try again, please.")
        }
      
       

 
    }
    return <div >
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

           <div>
           <input {...register('email', { required: "Email is required!"}) } type="text" placeholder="email:"></input>
            {errors?.email && <div style={{ color: "red" }}>{errors.email && <div style={{ color: "red" }}>{errors?.email.message}</div>}</div>}
           </div>

           <div>
            
           <input {...register('password', { required: "Password is required!"})} type="password" placeholder="password:"></input>
            {errors?.password && <div style={{ color: "red" }}>{errors.password && <div style={{ color: "red" }}>{errors?.password?.message}</div>}</div>}
            
           </div>

            <div style={{ marginTop: "10px" }}><Button>Send</Button></div>
        </form>
    </div>
}


