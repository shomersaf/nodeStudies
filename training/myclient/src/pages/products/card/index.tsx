
import { Card } from 'primereact/card';

interface IProduct {
    id: number,
    title: string,
    category: string,
    unit: string,
    price: number
}

export default function ProductsCard(props: { products: Array<IProduct>}) {

    return props.products.map((key) => {
        return <Card style={{ color: "purple", margin:"10px", width:"fit-content", padding:"10px" }} title={key.title} key={key.id}><h4>{'Price: $ '+key.price}</h4><h5> {key.unit}</h5><p  className='m-0'>{'Category: '+key.category}</p> </Card>
    })


   
    
}