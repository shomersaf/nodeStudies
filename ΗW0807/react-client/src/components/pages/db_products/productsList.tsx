
import { DbProductCard } from "../../ui-components/db_productCard/index"
import css from "./productsList.module.css"
export function ProductsList(props: { products: Array<any> }) {
  
  return <>
  <div className={css.listWrapper}>
     {props.products.map((product: {ProductID:number, ProductName: string, SupplierID: number, CategoryID: number, Unit: number, Price:number }) => {
        return <DbProductCard key={product?.ProductID} title={product?.ProductName} id={product?.ProductID} price={product?.Price}
            category={product.CategoryID} />
    })}

  </div>
  </>

   
}