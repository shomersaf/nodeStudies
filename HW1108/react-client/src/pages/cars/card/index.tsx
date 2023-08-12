
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
interface ICars {
    //car, lp, color, engine, company, img
    car:string,
    lp:string,
    color:string,
    engine:number,
    company:string,
    img:string
    }
export default function CarsCard(props: { cars: Array<ICars> }) {
    return props.cars.map((e) => {
        return <Card style={{
            color: "purple", margin: "10px",
            width: "fitContent",
            padding: "10px"
        }}
            title={e.car} key={Math.floor(Math.random() * 10)}>  
            <h2>{'lp: '+ e.lp}</h2>
            <h2>{'Color: '+ e.color}</h2>
            <h2>{'engine: '+ e.engine}</h2>
            <h2>{'company: '+ e.company}</h2>
            <Image src={e.img} alt="Image" width="250" />
        </Card>
    })

  



}