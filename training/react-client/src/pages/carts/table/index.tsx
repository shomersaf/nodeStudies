import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


interface ICart {
    CartID:number, 
    ProductID:number,
    ProductName:string,
    ProductPrice:number, 
    ProductQuantity:number, 
    OrderDAte: Date
}

export default function CartsTable(props: { carts: Array<ICart>, extended?: boolean }) {
    const { extended = true } = props
    if (!props.carts[0]) return null;
    const columns = [<Column field={"CartID"} header={"CartID"}></Column>,
    <Column field={"ProductID"} header={"ProductID"}></Column>,
    <Column field={"ProductName"} header={"ProductName"}></Column>,
    <Column field={"ProductPrice"} header={"ProductPrice"}></Column>,
    <Column field={"ProductQuantity"} header={"ProductQuantity"}></Column>,
    <Column field={"OrderDAte"} header={"OrderDAte"}></Column>]
    return <div>
        <div className="card">
            <DataTable value={props.carts} tableStyle={{ minWidth: '50rem' }}>
                {extended ?
                    Object.keys(props.carts[0]).map(key => {
                        return <Column field={key} header={key}></Column>
                    })
                    : columns
                }
            </DataTable>
        </div>
    </div>
} 