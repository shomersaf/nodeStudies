import { useEffect, useState } from "react"
import axios from "axios"
import EmployeesTable from "./table"
import { Loader } from "../../ui/loader"
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

interface IEmployee {
    id: number,
    name: string,
    surname: string,
    birthday: any,
    notes: string
}

export default function EmployeesPage() {
    const [employees, setEmployees] = useState<Array<IEmployee>>([])
    const [firstDate, setFirstDate] = useState(new Date('1900-01-01 00:00:00'))
    const [secondDate, setSecondDate] = useState(new Date(Date.now()))
    async function getEmployeesAction() {
        try {
            const result = await getAllEmployeesService(firstDate, secondDate)
            setEmployees(result)
        } catch (error) {
            alert("error")
        }
    }

    useEffect(() => {
        getEmployeesAction()

    }, [firstDate, secondDate])

    return <div >
        <h2>Employees</h2>
        <Calendar value={firstDate} onChange={(e1: any) => setFirstDate(e1.value)} showIcon />
        <Calendar style={{ marginLeft: "5px" }} value={secondDate} onChange={(e2: any) => setSecondDate(e2.value)} showIcon />
        <Button onClick={() => { setFirstDate(new Date('1900-01-01 00:00:00')); setSecondDate(new Date(Date.now())); }} style={{ marginLeft: "10px" }} >Refresh</Button>
        {employees.length ? <EmployeesTable employees={employees} /> : <Loader />}
       
    </div>
}

async function getAllEmployeesService(firstDate: Date, secondDate: Date): Promise<Array<IEmployee>> {
    const { data, headers } = await axios.get(`http://localhost:4001/employees?date1=${firstDate.toISOString()}&date2=${secondDate.toISOString()}`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const employees: Array<IEmployee> = data.map(e => {
        return {
            id: e.EmployeeID,
            name: e.FirstName,
            surname: e.LastName,
            birthday: new Date(e.BirthDate).toLocaleDateString(),
            notes: e.Notes
        }
    })
    return employees;
}


