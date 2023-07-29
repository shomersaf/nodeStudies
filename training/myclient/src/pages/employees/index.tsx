import { useEffect, useState } from "react"
import axios from "axios"
import EmployeesTable from "./table"
import { Loader } from "../../ui/loader"
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

const [firstDate, setFirstDate] = useState()
const [secondDate, setSecondDate] = useState()
interface IEmployee {
    id: number,
    name: string,
    surname: string,
    birthday: any,
    notes: string
}
const minDate = new Date('1900-01-01 00:00:00')
const maxDate = new Date(Date.now())

export default function EmployeesPage() {
    const [employees, setEmployees] = useState<Array<IEmployee>>([])

    async function getEmployeesAction() {
        try {
            const result = await getAllEmployeesService()
            setEmployees(result)
        } catch (error) {
            alert("error")
        }
    }


    useEffect(() => {
        getEmployeesAction()
    }, [])

    return <div >
        <h2>Employees</h2>
        <Calendar value={firstDate} onChange={(e1:any) => setFirstDate(e1.value)} showIcon />
        <Calendar style={{marginLeft:"5px"}} value={secondDate} onChange={(e2:any) =>setSecondDate(e2.value)} showIcon  />
        <Button onClick={()=>{console.log(firstDate, secondDate, maxDate, minDate)}} style={{marginLeft:"5px"}} > Send</Button>
        {employees.length?<EmployeesTable employees={employees} />:<Loader />}
    </div>
}


async function getAllEmployeesService(): Promise<Array<IEmployee>> {
    const { data, headers } = await axios.get(`http://localhost:4001/employees/${firstDate}`)
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
