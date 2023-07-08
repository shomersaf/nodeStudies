
import { ProductCard } from "../../ui-components/productCard"

import css from "./productsList.module.css"
export function ProductsList(props: { products: Array<any> }) {

    return <div className={css.listWrapper}>
    {props.products.map((product: {id:number, images: any , category: any, title: string, rating: number }) => {
        return <ProductCard key={product?.id} title={product?.title} id={product?.id} rating={product?.rating}
            images={product?.images}
            category={product.category} />
    })}
</div>
}