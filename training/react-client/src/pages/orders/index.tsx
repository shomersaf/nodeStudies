import { useEffect, useState } from "react"
import axios from "axios"
import OrdersTable from "./table"
import { Loader } from "../../ui/loader"


interface IOrder {
    id: number,
    customer: string,
    employee: string,
    ordered_at: string,
    products: string,
    quantity: number,
    total: number
}
export default function OrdersPage() {
    const [orders, setOrders] = useState<Array<IOrder>>([])
    async function getOrdersAction() {
        try {
            const result = await getAllOrdersService()
            setOrders(result)
        } catch (error) {
            alert("error")
        }
    }


    useEffect(() => {
        getOrdersAction()
    }, [])

    return <div >
        <h2>Orders</h2>
       {orders.length? <OrdersTable orders={orders} />:<Loader />}
    </div>
}


async function getAllOrdersService(): Promise<Array<IOrder>> {
    const { data, headers } = await axios.get(`http://localhost:4001/orders`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const orders: Array<IOrder> = data.map(s => {
        return {
            id: s.OrderID,
            customer: s.CustomerName,
            employee:s.employee,
            ordered_at: new Date(s.OrderDate).toLocaleDateString(),
            products: s.products,
            quantity: s.quantity,
            total: s.total
        }
    })
    return orders;
}