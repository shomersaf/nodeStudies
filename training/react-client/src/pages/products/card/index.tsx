import axios from "axios"
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useState} from "react"
import { InputNumber } from 'primereact/inputnumber';


interface IProduct {
    id: number,
    title: string,
    category: string,
    unit: string,
    price: number
}

export default function ProductsCard(props: { products: Array<IProduct> }) {
    
    return props.products.map((key) => {
        const [quantity, setQuantity] = useState(1);
        return <Card style={{
            color: "purple", margin: "10px",
            width: "fit-content",
            padding: "10px"
        }}
            title={key.title} key={key.id}><h4>{'Price: $ ' + key.price}</h4><h5> {key.unit}</h5>
            <p className='m-0'>{'Category: ' + key.category}</p>
          
            <InputNumber value={quantity} onValueChange={(e:any) => setQuantity(e.value)} showButtons buttonLayout="vertical" style={{ width: '4rem' }}
            decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
          <Button onClick={() => { addToCart(key.id, key.title, key.price, quantity) }} style={{ marginLeft: "10px" }} >Add to Cart</Button>
        </Card>
    })

    function addToCart(ProductID:number, ProductName:string, ProductPrice:number, ProductQuantity:number) {
        Number(ProductPrice)
       
        postNewCart(ProductID,ProductName, ProductPrice, ProductQuantity)
        async function postNewCart(ProductID:number, ProductName:string, ProductPrice:number, ProductQuantity:number): Promise<Array<IProduct>> {
            const { data} = await axios.post(`http://localhost:4001/cart/addToCart/${ProductID}/${ProductName}/${ProductPrice}/${ProductQuantity}`)
            if (!data) throw new Error(`Error Please contact support`)
        alert(`Added to Cart: ID: ${ProductID} Title: ${ProductName} Price: ${ProductPrice} Quantity: ${ProductQuantity}`)
      
   
         return data
        }
    }


}