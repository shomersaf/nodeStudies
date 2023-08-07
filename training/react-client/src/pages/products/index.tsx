import { useEffect, useState, useTransition } from "react"
import axios from "axios"
import { InputText } from 'primereact/inputtext';
import { Loader } from "../../ui/loader"
import ProductsCard from "./card"
import { Button } from 'primereact/button';

interface IProduct {
    id: number,
    title: string,
    category: string,
    unit: string,
    price: number
}


export default function ProductsPage() {
    const [productsFilter, setProductsFilter] = useState("")
    const [isPending, startTransition] = useTransition()
    const [products, setProducts] = useState<Array<IProduct>>([])
    async function getProductsAction() {
        try {
            const result = await getAllProductsService()
            setProducts(result)
        } catch (error) {
            alert("error")
        }
    }

    
    useEffect(() => {
        getProductsAction()
 
    }, [])
 
function filterHandler(e: any){
    startTransition(() => {
        setProductsFilter(e.target.value)
    
    })
}
var filteredProducts = productsFilter ? products.filter((p: any) => p?.title?.toLowerCase().includes(productsFilter.toLowerCase())) : products
    return <div style={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"center"}}>
        <div>
        <h2>Products</h2>
        <h3>For autorized users only - login or sign up for purchase</h3>
     <div><InputText onChange={filterHandler} />
      

      <Button onClick={()=>{setProductsFilter("")}} style={{marginLeft:"10px"}} > Refresh</Button>
     {isPending && <span> Still updating data... </span>} </div>
        </div>
     
    
     <div style={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"space-evenly"}}></div>
 
   {products.length?  <ProductsCard products={filteredProducts} />:<Loader />}
    </div>
}


async function getAllProductsService(): Promise<Array<IProduct>> {
    const { data, headers } = await axios.get(`http://localhost:4001/products`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const products: Array<IProduct> = data.map(p => {
        return {
            id: p.ProductID,
            title: p.ProductName,
            category: p.CategoryName,
            unit: p.Unit,
            price: p.Price
        }
    })
    return products;
}