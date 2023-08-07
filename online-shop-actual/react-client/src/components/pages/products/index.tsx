import { useEffect, useState } from "react"
import { Header } from "../../ui-components/header";
import { IProduct, addProductToCartService, getProductsService, getUserInfo } from "./api";
import ProductsTable from "./table";

export interface IAddToProduct {
    productPrice: number,
    quantity: number,
    productId: number
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Array<IProduct>>([])


    async function getProducts() {
        try {
            const result = await getProductsService()
            setProducts(result)
        } catch (error) {
            alert("error")
        }
    }
    async function addProductToCart({ productPrice, quantity, productId }: IAddToProduct) {
        try {
            const result = await addProductToCartService({ productPrice, quantity, productId })
            alert(result)
        } catch (error) {
            alert("error")
        }

    }
    useEffect(() => {
        getProducts()
        getUserInfo()
        return () => {
            console.log("Unmount!")
        }
    }, [])

    return <div >
        <Header text="Products Page" />
        <ProductsTable key={"productsTable"} products={products} addToCart={addProductToCart} />
    </div>
}


