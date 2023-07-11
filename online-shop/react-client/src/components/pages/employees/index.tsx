import { useEffect, useState, useTransition } from "react"
import axios from "axios"
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Header } from "../../ui-components/header";
// import { WithLoading } from "../../ui-components/with-loading";
import { useNavigate } from "react-router-dom";
import { IEmployee, betweenEmployeesService, getAllEmployeesService  } from "./api";
import EmployeesTable from "./table";
// import BeetweenEmployees from "./between";




export default function CustomersPage() {
    const navigate = useNavigate()
    const [employees, setEmployees] = useState<Array<IEmployee>>([])
    // const [rows, setNumOfRows] = useState(10)
    // const [totalRows, setTotalRows] = useState(0)

    async function getEmployeesAction() {
        try {
            const result = await getAllEmployeesService()
            setEmployees(result)
        } catch (error) {
            alert("error")
        }
    }

    // async function getCustomersCountAction() {
    //     try {
    //         const result = await getCustomersCountService()
    //         setTotalRows(result)
    //     } catch (error) {
    //         alert("error")
    //     }
    // }
    useEffect(() => {

        getEmployeesAction()
        //getCustomersCountAction()
        return () => {
            console.log("Unmount!")
        }
    }, [])//rows])
    async function handleBetweenApi(searchText: string) {
        try {
            const result = await betweenEmployeesService(searchText)
            setEmployees(result)
        } catch (error) {
            alert("error")
        }
    }
    return <div >
        <Header text="Employees Page" />
        {/* <BetweenEmployees searchAction={handleBetweenApi} allAction={getEmployeesAction} /> */}
       
        <EmployeesTable employees={employees} />
    </div>
}


