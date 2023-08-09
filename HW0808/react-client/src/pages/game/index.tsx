import { SubmitHandler, useForm} from "react-hook-form"
import { Button } from 'primereact/button';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Calendar } from 'primereact/calendar';
import { useState } from "react";


export default function GamePage() {
    interface IGame {
        gameTimeA: Date,
        TeamA: string,
        TeamA_score: number,
        TeamB_score: number,
        TeamB:string  
    }
    
    
    const { register, handleSubmit, formState: { errors },reset,getValues } = useForm<IGame>({mode:'onChange'})
    const navigate = useNavigate()
    const [gameTimeA, setgameTimeA] = useState(new Date(Date.now()))
    const onSubmit: SubmitHandler<IGame> = (data) => {
        console.log(`The game ${data.gameTimeA} is to be added`)

        postSignup()
        reset()
    }


    async function postSignup() {
        try{
            const result = await axios.post(`http://localhost:4001/game/new`, {  gameTimeA:new Date(gameTimeA).toISOString().replace("Z", " ").slice(0, 19),
            TeamA:getValues('TeamA'),
            TeamA_score:getValues('TeamA_score'),
            TeamB_score:getValues('TeamB_score'),
            TeamB:getValues('TeamB')})
            if(result?.data)  alert(`The new game is added`)
            setTimeout(() => { navigate("/games") }, 500)
        }catch(e){
            alert("Something went wrong!")
        }
      
       

 
    }
    return <div >
        <h2>New Game</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Calendar value={gameTimeA} onChange={(e: any) => setgameTimeA(e.value)} showIcon />
         
           <div>
           <input {...register('TeamA', { required: "semel is required!"})} type="text" placeholder="Team A:"></input>
            {errors?.TeamA && <div style={{ color: "red" }}>{errors.TeamA && <div style={{ color: "red" }}>{errors?.TeamA?.message}</div>}</div>}
           </div>

           <div>
           <input {...register('TeamB', { required: "secondaryColor is required!"})} type="text" placeholder="Team B:"></input>
            {errors?.TeamB && <div style={{ color: "red" }}>{errors.TeamB && <div style={{ color: "red" }}>{errors?.TeamB?.message}</div>}</div>}
           </div>


           <div>
           <input {...register('TeamA_score', { required: "City is required!"} )} type="text" placeholder="Team A score:"></input>
            {errors?.TeamA_score && <div style={{ color: "red" }}>{errors.TeamA_score && <div style={{ color: "red" }}>{errors?.TeamA_score.message}</div>}</div>}
           </div>

           <div>
            
           <input {...register('TeamB_score', { required: "mainColor is required!"})} type="text" placeholder="TeamB_score:"></input>
            {errors?.TeamB_score && <div style={{ color: "red" }}>{errors.TeamB_score && <div style={{ color: "red" }}>{errors?.TeamB_score?.message}</div>}</div>}
           </div>

         
          
           <p><i  style={{ color: "silver", fontSize:"smaller" }}>Only the hash codes of web safe colors or the reserved web colors names shoul be used on adding the colors</i></p>

            <div style={{ marginTop: "10px" }}><Button>Add</Button></div>
        </form>
    </div>
}


