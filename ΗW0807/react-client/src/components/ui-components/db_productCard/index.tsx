
interface IdbProduct {
  ProductID: number,
  ProductName: string,
  SupplierID: number,
  CategoryID: number,
  Unit: number,
  Price: number
}
export function DbProductCard(props: IdbProduct) {

  
  return <>
   <div className="db_product">
    <h3>{props.title}</h3>
    <h4>Category: {props.category}</h4>
    <h2>{props.price}$</h2>
  </div>
  </>
 

}
