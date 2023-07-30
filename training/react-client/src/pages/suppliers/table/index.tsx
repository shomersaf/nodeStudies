import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
interface ISupplier {
    id: number,
    name: string,
    contact: string,
    address:string,
    city:string,
    code:number,
    country:string,
    phone:number
}


export default function SuppliersTable(props: { suppliers: Array<ISupplier>, extended?: boolean }) {
    const { extended = true } = props
    if (!props.suppliers[0]) return null;
    const columns = [<Column field={"id"} header={"id"}></Column>,
    <Column field={"name"} header={"name"}></Column>,
    <Column field={"contact"} header={"contact"}></Column>,
    <Column field={"address"} header={"address"}></Column>,
    <Column field={"city"} header={"city"}></Column>,
    <Column field={"code"} header={"code"}></Column>,
    <Column field={"country"} header={"country"}></Column>,
    <Column field={"phone"} header={"phone"}></Column>
]
    return <div>
        <div className="card">
            <DataTable value={props.suppliers} tableStyle={{ minWidth: '50rem' }}>
                {extended ?
                    Object.keys(props.suppliers[0]).map(key => {
                        return <Column field={key} header={key}></Column>
                    })
                    : columns
                }
            </DataTable>
        </div>
    </div>
} 