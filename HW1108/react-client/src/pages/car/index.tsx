import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from 'primereact/button';
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function CarPage() {
    interface ICar {
        car: string,
        lp: string,
        color: string,
        engine: number,
        company: string,
        img: string
    }
    
    const { register, handleSubmit, formState: { errors },reset,getValues } = useForm<ICar>({mode:'onChange'})
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<ICar> = (data) => {
        console.log(`The car ${data.car} is to be added`)
        postCar()
        reset()
    }


    async function postCar() {
        try{
            const result = await axios.post(`http://localhost:4001/cars/new`, {  car:getValues('car'),
            lp:getValues('lp'),
            color:getValues('color'),
            engine:getValues('engine'),
            company:getValues('company'),
            img:getValues('img')})
            if(result?.data)  alert(`The new car is added`)
            setTimeout(() => { navigate("/cars") }, 500)
        }catch(e){
            alert("Something went wrong!")
        }
      
       

 
    }
    return <div >
        <h2>New Car</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

           <div>
           <input {...register('car', { required: "car name is required!" })} type="text" placeholder="car:"></input>
            {errors?.car && <div style={{ color: "red" }}>{errors.car && <div style={{ color: "red" }}>{errors?.car.message}</div>}</div>}
           </div>

           <div>
           <input {...register('lp', { required: "lp is required!"} )} type="text" placeholder="lp:"></input>
            {errors?.lp && <div style={{ color: "red" }}>{errors.lp && <div style={{ color: "red" }}>{errors?.lp.message}</div>}</div>}
           </div>

           <div>
            
           <input {...register('color', { required: "color is required!"})} type="text" placeholder="color:"></input>
            {errors?.color && <div style={{ color: "red" }}>{errors.color && <div style={{ color: "red" }}>{errors?.color?.message}</div>}</div>}
           </div>

           <div>
           <input {...register('engine', { required: "engine is required!"})} type="text" placeholder="engine:"></input>
            {errors?.engine && <div style={{ color: "red" }}>{errors.engine && <div style={{ color: "red" }}>{errors?.engine?.message}</div>}</div>}
           </div>

           <div>
           <input {...register('company', { required: "company is required!"})} type="text" placeholder="company:"></input>
            {errors?.company && <div style={{ color: "red" }}>{errors.company && <div style={{ color: "red" }}>{errors?.company?.message}</div>}</div>}
           </div>

           <div>
           <input {...register('img', { required: "img is required!"})} type="text" placeholder="img:"></input>
            {errors?.img && <div style={{ color: "red" }}>{errors.img && <div style={{ color: "red" }}>{errors?.img?.message}</div>}</div>}
           </div>

            <div style={{ marginTop: "10px" }}><Button>Add</Button></div>
        </form>
    </div>
}


