import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from 'primereact/button';
import axios from "axios"
import { Calendar } from 'primereact/calendar';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

import { Dropdown } from 'primereact/dropdown';

export default function RentalPage() {
    interface IRental {
        car:string,
        fromDate: Date,
        toDate: Date,
        pricePerDay: number
    }

    interface ICars {
        //car, lp, color, engine, company, img
        lp:string,
        color:string,
        engine:number,
        company:string,
        img:string
        }
        
    
    const { register, handleSubmit, formState: { errors },reset,getValues } = useForm<IRental>({mode:'onChange'})
    const navigate = useNavigate()
    const [fromDate, setFromDate] = useState(new Date(Date.now()))
    const [toDate, setToDate] = useState(new Date(Date.now()))
    const [car, setCar] = useState<any>()
    const [cars, setCars] = useState<Array<ICars>>([])
    const onSubmit: SubmitHandler<IRental> = () => {
    //    setCars(cars)
        postCar()
        reset()
    }


    async function postCar( ) {
        try{
            const result = await axios.post(`http://localhost:4001/rentals/new`, {
            car: car.car,//the problem is here
            fromDate:new Date(fromDate).toISOString().replace("Z", " ").slice(0, 19),
            toDate:new Date(toDate).toISOString().replace("Z", " ").slice(0, 19),
            pricePerDay:getValues('pricePerDay')})
            if(result?.data)  alert(`The new rental is added`)
            setTimeout(() => { navigate("/rentals") }, 500)
        }catch(e){
            alert("Something went wrong!")
        }
    }

    async function getAllCarsService(): Promise<Array<ICars>> {
    
        const { data, headers } = await axios.get(`http://localhost:4001/cars`)
        if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)
    
         const actualCars= data.map(c => {
            return {
                car:c.car,
                lp:c.lp,
                color:c.color,
                engine:c.engine,
                company:c.company,
                img:c.img}})
        setCars(actualCars)
                
        return cars;
    }


      
    useEffect(() => {
        getAllCarsService()

    }, [])
 

    return <div >
        <h2>New Rental</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

        <Dropdown value={car} onChange={(e) => setCar(e.value)} options={cars} optionLabel="car" 
    placeholder="Select a Car" className="w-full md:w-14rem" />

            <div style={{ marginTop: "10px" }}>
            <Calendar value={fromDate} onChange={(e: any) => setFromDate(e.value)} showIcon />
            </div>
           <div style={{ marginTop: "10px" }}>
           <Calendar value={toDate} onChange={(e: any) => setToDate(e.value)} showIcon />
           </div>
          
           <div style={{ marginTop: "10px" }}>
           <input {...register('pricePerDay', { required: "pricePerDay is required!"})} type="text" placeholder="pricePerDay:"></input>
            {errors?.pricePerDay && <div style={{ color: "red" }}>{errors.pricePerDay && <div style={{ color: "red" }}>{errors?.pricePerDay?.message}</div>}</div>}
           </div>

            <div style={{ marginTop: "10px" }}><Button>Add</Button></div>
        </form>
    </div>
}


