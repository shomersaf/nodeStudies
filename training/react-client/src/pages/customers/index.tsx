import { useEffect, useState } from "react"
import axios from "axios"
import CustomersTable from "./table"
import { Loader } from "../../ui/loader"

interface ICustomer {
    id: number,
    name: string,
    city: string,
    country: string,
    contact: string,
    address: string
}

export default function CustomersPage() {
    const [customers, setCustomers] = useState<Array<ICustomer>>([])
    async function getCustomersAction() {
        try {
            const result = await getAllCustomersService()
            setCustomers(result)
        } catch (error) {
            alert("error")
        }
    }

    
    useEffect(() => {
        getCustomersAction()
    }, [])
 
    return <div >
     <h2>Customers</h2>
     {customers.length?<CustomersTable customers={customers} />  : <Loader />}
    
    </div>
}


async function getAllCustomersService(): Promise<Array<ICustomer>> {
    const { data, headers } = await axios.get(`http://localhost:4001/customers`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const customers: Array<ICustomer> = data.map(c => {
        return {
            id: c.CustomerID,
            name: c.CustomerName,
            contact: c.ContactName,
            city: c.City,
            country: c.Country,
            address: c.Address,
        }
    })
    return customers;
}