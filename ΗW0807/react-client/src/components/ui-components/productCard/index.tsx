// image, countryName, region
import { Card } from 'primereact/card';

interface IProduct {
    id: number,
    title: string,
    images: [string],
    rating: number,
    category: ["dairy", "drinks", "food", "fruits",]
}
export function ProductCard(props: IProduct) {
    const header = (
        <img alt="Card" src={props.images[0]} />
    );

    return <Card title={props.title} header={header} style={{ width: "300px" }}>
        <span>{props.category}</span>
    </Card>

}
