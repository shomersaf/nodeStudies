import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from 'primereact/button';
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function RegistrationPage() {
    interface IFields {
        email: string,
        userName: string,
        password: string
    }
    const { register, handleSubmit, formState: { errors },reset,getValues } = useForm<IFields>({mode:'onChange'})
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<IFields> = (data) => {
        console.log(`User ${data.userName} is checking up to be registrated`)
        postSignup()
        reset()
    }


    async function postSignup() {
        try{
            const result = await axios.post(`http://localhost:4001/signup`, {  userName:getValues('userName'),
            email:getValues('email'),
            password:getValues('password')})
            if(result?.data)  alert(`User is registrated`)
            setTimeout(() => { navigate("/login") }, 500)
        }catch(e){
            alert("Something went wrong!")
        }
      
       

 
    }
    return <div >
        <h2>Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

           <div>
           <input {...register('userName', { required: "User name is required!" })} type="text" placeholder="user name:"></input>
            {errors?.userName && <div style={{ color: "red" }}>{errors.userName && <div style={{ color: "red" }}>{errors?.userName.message}</div>}</div>}
           </div>

           <div>
           <input {...register('email', { required: "Email is required!", pattern:{value: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i, message:"Enter thr valid email, pleace!"} })} type="text" placeholder="email:"></input>
            {errors?.email && <div style={{ color: "red" }}>{errors.email && <div style={{ color: "red" }}>{errors?.email.message}</div>}</div>}
           </div>

           <div>
            
           <input {...register('password', { required: "Password is required!",pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,12}$/})} type="password" placeholder="password:"></input>
            {errors?.password && <div style={{ color: "red" }}>{errors.password && <div style={{ color: "red" }}>{errors?.password?.message}</div>}</div>}
            <p><i  style={{ color: "silver", fontSize:"smaller" }}>The password must contain: <br /> from 6 to 12 latin letters (at least one capital), numbers and special characters.</i></p>
           </div>

            <div style={{ marginTop: "10px" }}><Button>Send</Button></div>
        </form>
    </div>
}


