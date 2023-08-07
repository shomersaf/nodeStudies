import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ICustomer } from '../api';
import { useContext } from 'react';
import { UTCContext, formatContext } from '../../../../App';

import { compareAsc, format } from 'date-fns'

export default function CustomersTable(props: { customers: Array<ICustomer>, extended?: boolean }) {
    const { extended = true } = props
    //const value = useContext(UTCContext)
    const value = useContext(formatContext)
    if (!props.customers[0]) return null;
    const columns = [<Column field={"id"} header={"id"}></Column>,
    <Column field={"name"} header={"name"}></Column>,
    <Column field={"city"} header={"city"}></Column>]
    // const customersAfterUtc = props.customers.map((currentCustomer) => {
    //     if (value.isUtc) {
    //         return { ...currentCustomer, createdAt: new Date(currentCustomer.createdAt).toUTCString() }
    //     } else {
    //         return { ...currentCustomer, createdAt: new Date(currentCustomer.createdAt).toLocaleString() }
    //     }
    // })

   
    //format(new Date(currentCustomer.createdAt),'yyyy-MM-dd')
   
    const customersFormated = props.customers.map((currentCustomer) => {
        if (value.formatTheDate) {
   
            return { ...currentCustomer, createdAt: format(new Date(currentCustomer.createdAt),'yyyy-MMM-dd HH:mm:SS') }
        } else {
            return { ...currentCustomer, createdAt:  format(new Date(currentCustomer.createdAt),'yy/MM/dd HH:mm:SS') }
        }
    })


    return <div>
        <div className="card">
            <DataTable value={customersFormated} tableStyle={{ minWidth: '50rem' }}>
                {extended ?
                    Object.keys(customersFormated[0]).map(key => {
                        return <Column field={key} header={key}></Column>
                    })
                    : columns
                }
            </DataTable>
        </div>
    </div>
} 