import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from 'primereact/button';
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function TeamPage() {
    interface ITeam {
        teamName: string,
        city: string,
        mainColor: string,
        secondaryColor: string,
        semel:string
    }
    
    const { register, handleSubmit, formState: { errors },reset,getValues } = useForm<ITeam>({mode:'onChange'})
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<ITeam> = (data) => {
        console.log(`The team ${data.teamName} is to be added`)
        postSignup()
        reset()
    }


    async function postSignup() {
        try{
            const result = await axios.post(`http://localhost:4001/team/new`, {  teamName:getValues('teamName'),
            city:getValues('city'),
            mainColor:getValues('mainColor'),
            secondaryColor:getValues('secondaryColor'),
            semel:getValues('semel')})
            if(result?.data)  alert(`The new team is added`)
            setTimeout(() => { navigate("/teams") }, 500)
        }catch(e){
            alert("Something went wrong!")
        }
      
       

 
    }
    return <div >
        <h2>New Team</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

           <div>
           <input {...register('teamName', { required: "Team name is required!" })} type="text" placeholder="team name:"></input>
            {errors?.teamName && <div style={{ color: "red" }}>{errors.teamName && <div style={{ color: "red" }}>{errors?.teamName.message}</div>}</div>}
           </div>

           <div>
           <input {...register('city', { required: "City is required!"} )} type="text" placeholder="city:"></input>
            {errors?.city && <div style={{ color: "red" }}>{errors.city && <div style={{ color: "red" }}>{errors?.city.message}</div>}</div>}
           </div>

           <div>
            
           <input {...register('mainColor', { required: "mainColor is required!"})} type="text" placeholder="mainColor:"></input>
            {errors?.mainColor && <div style={{ color: "red" }}>{errors.mainColor && <div style={{ color: "red" }}>{errors?.mainColor?.message}</div>}</div>}
           </div>

           <div>
           <input {...register('secondaryColor', { required: "secondaryColor is required!"})} type="text" placeholder="secondaryColor:"></input>
            {errors?.secondaryColor && <div style={{ color: "red" }}>{errors.secondaryColor && <div style={{ color: "red" }}>{errors?.secondaryColor?.message}</div>}</div>}
           </div>

           <div>
           <input {...register('semel', { required: "semel is required!"})} type="text" placeholder="semel:"></input>
            {errors?.semel && <div style={{ color: "red" }}>{errors.semel && <div style={{ color: "red" }}>{errors?.semel?.message}</div>}</div>}
           </div>

           <p><i  style={{ color: "silver", fontSize:"smaller" }}>Only the hash codes of web safe colors or the reserved web colors names shoul be used on adding the colors</i></p>

            <div style={{ marginTop: "10px" }}><Button>Add</Button></div>
        </form>
    </div>
}


