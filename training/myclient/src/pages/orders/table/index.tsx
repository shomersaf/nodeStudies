import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


interface IOrder {
    id: number,
    customer: string,
    employee: string,
    ordered_at: string,
    products: string,
    quantity: number,
    total: number
}
export default function OrdersTable(props: { orders: Array<IOrder>, extended?: boolean }) {
    const { extended = true } = props
    if (!props.orders[0]) return null;
    const columns = [<Column field={"id"} header={"id"}></Column>,
    <Column field={"customer"} header={"customer"}></Column>,
    <Column field={"employee"} header={"employee"}></Column>,
<Column field={"ordered_at"} header={"ordered_at"}></Column>,
<Column field={"products"} header={"products"}></Column>,
<Column field={"quantity"} header={"quantity"}></Column>,
<Column field={"total"} header={"total"}></Column>]
    return <div>
        <div className="card">
            <DataTable value={props.orders} tableStyle={{ minWidth: '50rem' }}>
                {extended ?
                    Object.keys(props.orders[0]).map(key => {
                        return <Column field={key} header={key}></Column>
                    })
                    : columns
                }
            </DataTable>
        </div>
    </div>
} 