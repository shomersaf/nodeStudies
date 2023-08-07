import { useEffect } from "react"
import axios from "axios"


export default function AddProductPage() {

    async function addProduct() {
        try {
            const result = await axios.post("http://localhost:4000/products/new", {
                productName: "milk",
                price: 20,
                category: 12
            }, {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            })
            console.log(result)
        } catch (error) {

        }
    }
    return <div>
        <h1> Add Product Page </h1>
        <button onClick={() => { addProduct() }}> Add Product </button>
    </div>
}


