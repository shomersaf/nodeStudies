
import { Card } from 'primereact/card';

interface IRentals {
    rentId:number,
    carId:number,
    car:string,
    fromDate:Date,
    toDate:Date,
    pricePerDay:number,
    total:number,
    }
export default function RentalsCard(props: { rentals: Array<IRentals> }) {
    return props.rentals.map((e) => {
        return <Card style={{
            color: "purple", margin: "10px",
            width: "50%",
            padding: "10px"
        }}
            title={'rental id: '+ e.rentId} key={e.rentId}>  
            <h2>{'car: '+ e.car}</h2>
            <h3>{'carId: '+ e.carId}</h3>
            <h3>{'from Date: '+ new Date(e.fromDate).toDateString()}</h3>
            <h3>{'to Date: '+ new Date(e.toDate).toDateString()}</h3>
            <h3>{'price Per Day: '+ e.pricePerDay}</h3>
            <h2>{'total: '+ e.total}</h2>
           
        </Card>
    })

  



}