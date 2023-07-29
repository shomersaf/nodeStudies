import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
interface IEmployee {
    id: number,
    name: string,
    surname: string,
    birthday: string,
    notes: string
}


export default function CustomersTable(props: { employees: Array<IEmployee>, extended?: boolean }) {
    const { extended = true } = props
    if (!props.employees[0]) return null;
    const columns = [<Column field={"id"} header={"id"}></Column>,
    <Column field={"name"} header={"name"}></Column>,
    <Column field={"surname"} header={"surname"}></Column>,
    <Column field={"birthday"} header={"birthday"}></Column>,
    <Column field={"notes"} header={"notes"}></Column>
]
    return <div>
        <div className="card">
            <DataTable value={props.employees} tableStyle={{ minWidth: '50rem' }}>
                {extended ?
                    Object.keys(props.employees[0]).map(key => {
                        return <Column field={key} header={key}></Column>
                    })
                    : columns
                }
            </DataTable>
        </div>
    </div>
} 