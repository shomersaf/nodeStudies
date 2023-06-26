import { useEffect, useState, useTransition } from "react"
import axios from "axios"
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Header } from "../../ui-components/header";
import { WithLoading } from "../../ui-components/with-loading";
import { ProductsList } from "./productsList";


const productsUrl: string = "http://localhost:4000/products";

export default function ProductsPage() {
    const [products, setProducts] = useState([])
    const [areProductsLoading, setAreProductsLoading] = useState(false)
    const [productsFilter, setProductsFilter] = useState("")
    const [isPending, startTransition] = useTransition()
    async function getProducts() {
        try {
            setAreProductsLoading(true)
            const result = await axios.get(productsUrl)
            const { data } = result;
            console.log(result.data)
            if (result.data) setProducts(data)
        } catch (ex) {
            alert("error")
        } finally {
            setAreProductsLoading(false)
        }
    }
    useEffect(() => {

        getProducts()
        return () => {
            console.log("Unmount!")
            
        }
    }, [])
    function handleFilter(e: any) {
        startTransition(() => {
            setProductsFilter(e.target.value)
        })
    }
    const filteredProducts = productsFilter ? products.filter((p: any) => p?.title?.toLowerCase().includes(productsFilter.toLowerCase())) : products
   console.log(filteredProducts)
    return <div>
        <Header text="Products Page" />
        <InputText onChange={handleFilter} />
        {isPending && <span> Still updating data... </span>}
        <Button onClick={getProducts} > Refresh</Button>
        <WithLoading isLoading={areProductsLoading}>
           
            <ProductsList products={filteredProducts} />
        
        </WithLoading>
    </div>
}



