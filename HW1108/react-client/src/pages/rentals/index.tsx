import { useEffect, useState } from "react"
import axios from "axios"
import { Loader } from "../../ui/loader"
import RentalsCard from "./card"

interface IRentals {
    rentId:number,
    carId:number,
    fromDate:Date,
    toDate:Date,
    pricePerDay:number,
    total:number
    }

export default function RentalsPage() {
    const [rentals, setRentals] = useState<Array<IRentals>>([])
    async function getRentalsAction() {
        try {
            const result = await getAllCarsService()
            setRentals(result)
        } catch (error) {
            alert("error")
        }
    }

    
    useEffect(() => {
        getRentalsAction()
 
    }, [])
 


    return <div style={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"center"}}>
        <div>
        <h2>Rentals</h2>
        </div>
     <div style={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"space-evenly"}}></div>
 
   {rentals.length?  <RentalsCard rentals={rentals} />:<Loader />}
    </div>
}


async function getAllCarsService(): Promise<Array<IRentals>> {
    const { data, headers } = await axios.get(`http://localhost:4001/rentals`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const rentals: Array<IRentals> = data.map(r => {
        return {
            rentId:r.rentId,
            carId:r.carId,
            fromDate:r.fromDate,
            toDate:r.toDate,
            pricePerDay:r.pricePerDay,
            total:r.total}})
    return rentals;
}