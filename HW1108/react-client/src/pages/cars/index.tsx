import { useEffect, useState } from "react"
import axios from "axios"
import { Loader } from "../../ui/loader"
import CarsCard from "./card"

interface ICars {
//car, lp, color, engine, company, img
car:string,
lp:string,
color:string,
engine:number,
company:string,
img:string
}


export default function CarsPage() {
    const [cars, setCars] = useState<Array<ICars>>([])
    async function getCarsAction() {
        try {
            const result = await getAllCarsService()
            setCars(result)
        } catch (error) {
            alert("error")
        }
    }

    
    useEffect(() => {
        getCarsAction()
 
    }, [])
 


    return <div style={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"center"}}>
        <div>
        <h2>Cars</h2>
        </div>
     <div style={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"space-evenly"}}></div>
 
   {cars.length?  <CarsCard cars={cars} />:<Loader />}
    </div>
}


async function getAllCarsService(): Promise<Array<ICars>> {
    const { data, headers } = await axios.get(`http://localhost:4001/cars`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const cars: Array<ICars> = data.map(c => {
        return {
            car:c.car,
            lp:c.lp,
            color:c.color,
            engine:c.engine,
            company:c.company,
            img:c.img}})
    return cars;
}