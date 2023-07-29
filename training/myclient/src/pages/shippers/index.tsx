import { useEffect, useState } from "react"
import axios from "axios"
import ShippersTable from "./table"
import { Loader } from "../../ui/loader"


interface IShipper {
    id: number,
    name: string,
    phone: number
}

export default function ShippersPage() {
    const [shippers, setShippers] = useState<Array<IShipper>>([])
    async function getShippersAction() {
        try {
            const result = await getAllShippersService()
            setShippers(result)
        } catch (error) {
            alert("error")
        }
    }


    useEffect(() => {
        getShippersAction()
    }, [])

    return <div >
        <h2>Shippers</h2>
       {shippers.length? <ShippersTable shippers={shippers} />:<Loader />}
    </div>
}


async function getAllShippersService(): Promise<Array<IShipper>> {
    const { data, headers } = await axios.get(`http://localhost:4001/shippers`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const shippers: Array<IShipper> = data.map(s => {
        return {
            id: s.ShipperID,
            name: s.ShipperName,
            phone: s.Phone
        }
    })
    return shippers;
}