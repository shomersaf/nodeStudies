import { useEffect, useState, useTransition } from "react"
// import axios from "axios"
import { Button } from 'primereact/button';
// import { InputText } from 'primereact/inputtext';
// import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";  
import 'primeicons/primeicons.css';
import { Header } from "../../ui-components/header";
import { Calendar } from 'primereact/calendar';
// import { WithLoading } from "../../ui-components/with-loading";
import { useNavigate } from "react-router-dom";
import { IEmployee, betweenEmployeesService, getAllEmployeesService  } from "./api";
import EmployeesTable from "./table";






export default function CustomersPage() {
    const navigate = useNavigate()
    const [employees, setEmployees] = useState<Array<IEmployee>>([])
     
     const [dateRange1, setDateRange1] = useState(null)
     const [dateRange2, setDateRange2] = useState(null)

    async function getEmployeesAction() {
        try {
            const result = await getAllEmployeesService()
            setEmployees(result)
        } catch (error) {
            alert("employees are not ok! omg! error!")
        }
    }


    useEffect(() => {

        getEmployeesAction()

        handleBetweenApi()
        return () => {
            console.log("Unmount!")
        }
    }, [])//rows])
    async function handleBetweenApi(dateRange1,dateRange2) {
        try {
            const result = await betweenEmployeesService(dateRange1,dateRange2)
            console.log(result)
            //whaaat?????
            setEmployees(result)

        } catch (error) {
            alert("error!!!! alarm! alarm!")
        }
    }
    return <div >
        <Header text="Employees Page" />
        <Calendar value={dateRange1} onChange={(e) => setDateRange1(e.value as any)} />
        <Calendar value={dateRange2} onChange={(e) => setDateRange2(e.value as any)} />
        <Button onClick ={()=>{handleBetweenApi(dateRange1,dateRange2)}}>Show</Button>
        <Button onClick ={()=>{setDateRange1(null);setDateRange2(null)}}>Clear</Button>
        <EmployeesTable employees={employees} range={dateRange1}/>
    </div>
}


