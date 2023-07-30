import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
interface IShipper {
    id: number,
    name: string,
    phone: number
}


export default function ShippersTable(props: { shippers: Array<IShipper>, extended?: boolean }) {
    const { extended = true } = props
    if (!props.shippers[0]) return null;
    const columns = [<Column field={"id"} header={"id"}></Column>,
    <Column field={"name"} header={"name"}></Column>,
    <Column field={"phone"} header={"phone"}></Column>
]
    return <div>
        <div className="card">
            <DataTable value={props.shippers} tableStyle={{ minWidth: '50rem' }}>
                {extended ?
                    Object.keys(props.shippers[0]).map(key => {
                        return <Column field={key} header={key}></Column>
                    })
                    : columns
                }
            </DataTable>
        </div>
    </div>
} 