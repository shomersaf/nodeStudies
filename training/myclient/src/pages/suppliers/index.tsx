import { useEffect, useState } from "react"
import axios from "axios"
import SuppliersTable from "./table"
import { Loader } from "../../ui/loader"

interface ISupplier {
    id: number,
    name: string,
    contact: string,
    address:string,
    city:string,
    code:number,
    country:string,
    phone:number
}


export default function SuppliersPage() {
    const [suppliers, setSuppliers] = useState<Array<ISupplier>>([])
    async function getSuppliersAction() {
        try {
            const result = await getAllSuppliersService()
            setSuppliers(result)
        } catch (error) {
            alert("error")
        }
    }


    useEffect(() => {
        getSuppliersAction()
    }, [])

    return <div >
        <h2>Suppliers</h2>
       {suppliers.length? <SuppliersTable suppliers={suppliers} />:<Loader />}
    </div>
}


async function getAllSuppliersService(): Promise<Array<ISupplier>> {
    const { data, headers } = await axios.get(`http://localhost:4001/suppliers`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const suppliers: Array<ISupplier> = data.map(s => {
        return {
            id: s.SupplierID,
            name: s.SupplierName,
            contact: s.ContactName,
            address:s.Address,
            city:s.City,
            code:s.PostalCode,
            country:s.Country,
            phone:s.Phone
        }
        
    })
    return suppliers;
}