import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IEmployee } from '../api';


export default function EmployeesTable(props: { employees: Array<IEmployee>, range:any }) {
    if (!props.employees[0]) return null;
    const columns = [<Column field={"id"} header={"id"}></Column>,
    <Column field={"surname"} header={"surname"}></Column>,
    <Column field={"name"} header={"name"}></Column>,
    <Column field={"birthday"} header={"birthday"}></Column>,
    <Column field={"photo"} header={"photo"}></Column>,
    <Column field={"notes"} header={"notes"}></Column>
]
    return <div>
        <div className="card">
            <DataTable value={props.employees} tableStyle={{ minWidth: '50rem' }}>
                {props.employees[0]?
                    Object.keys(props.employees[0]).map(item => {
                        return <Column field={item} header={item} key={item}></Column>
                    })
                    : columns
                }
            </DataTable>
        </div>
    </div>
} 