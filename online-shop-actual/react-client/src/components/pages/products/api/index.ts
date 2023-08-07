import axios from "axios"
import { IAddToProduct } from ".."

export interface IProduct {
    id: number,
    name: string,
    // category: { id: number, name: string, description: string },
    category: string,
    price: number,
    unit: string,
    supplier: string,
    supplierCountry: string,

}

async function getProductsService(): Promise<Array<IProduct>> {
    const { data, headers } = await axios.get(`http://localhost:4000/products`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)
    const products: Array<IProduct> = data.map(p => {
        return {
            id: p.ProductID,
            name: p.ProductName,
            category: p.CategoryName,
            price: +p.Price,
            unit: p.Unit,
            supplier: p.SupplierName,
            supplierCountry: p.Country
        }
    })
    return products;
}

async function addProductToCartService({ productPrice, quantity, productId }: IAddToProduct): Promise<boolean> {
    const { data, headers } = await axios.post(`http://localhost:4000/cart/add-product`, {
        productPrice, quantity, productId, cartId: localStorage.getItem("cartId")
    })
    if (data.message === "ok") return true;
    else return false;

}

async function getUserInfo(): Promise<boolean> {
    const { data } = await axios.get(`http://localhost:4000/user/info`, {
        headers: {
            authorization: localStorage.getItem("token")
        }
    })
    localStorage.setItem("cartId", data.cartId)
    if (data.message === "ok") return true;
    else return false;

}




export { getProductsService, addProductToCartService, getUserInfo }