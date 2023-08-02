import { useEffect, useState } from "react"
import axios from "axios"
import CartTable from "./table"
import { Loader } from "../../ui/loader"


interface ICart {
    CartID:number, 
    ProductID:number,
    ProductPrice:number, 
    ProductQuantity:number, 
    OrderDAte: Date

}
export default function CartsPage() {
    const [carts, setCarts] = useState<Array<ICart>>([])
    async function getCartsAction() {
        try {
            const result = await getAllCartsService()
            setCarts(result)
        } catch (error) {
            alert("error")
        }
    }

    
    useEffect(() => {
        getCartsAction()
    }, [])
 
    return <div >
     <h2>My Cart</h2>
     {carts.length?<CartTable carts={carts} />  : <Loader />}
    
    </div>
}


async function getAllCartsService(): Promise<Array<ICart>> {
    const { data, headers } = await axios.get(`http://localhost:4001/cart`)

    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const cart: Array<ICart> = data.map(c => {
        return {
            CartID:c.CartID, 
            ProductID:c.ProductID,
            ProductPrice:c.ProductPrice, 
            ProductQuantity:c.ProductQuantity, 
            OrderDAte: c.OrderDAte,
        }
    })
    return cart;
}