import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ICustomer } from '../api';


export default function CustomersTable(props: { customers: Array<ICustomer>, extended?: boolean }) {
    const { extended = true } = props
    if (!props.customers[0]) return null;
    const columns = [<Column field={"id"} header={"id"}></Column>,
    <Column field={"name"} header={"name"}></Column>,
    <Column field={"city"} header={"city"}></Column>]
    return <div>
        <div className="card">
            <DataTable value={props.customers} tableStyle={{ minWidth: '50rem' }}>
                {extended ?
                    Object.keys(props.customers[0]).map(key => {
                        return <Column field={key} header={key}></Column>
                    })
                    : columns
                }
            </DataTable>
        </div>
    </div>
} 