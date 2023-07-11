import { useEffect, useState, useTransition } from "react"
import axios from "axios"
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Header } from "../../ui-components/header";
import { WithLoading } from "../../ui-components/with-loading";
import { useNavigate } from "react-router-dom";
import { ICustomer, getAllCustomersService, searchCustomersService, getCustomersCountService } from "./api";
import CustomersTable from "./table";
import SearchCustomers from "./search";
import { Paginator } from "primereact/paginator";



export default function CustomersPage() {
    const navigate = useNavigate()
    const [customers, setCustomers] = useState<Array<ICustomer>>([])
    const [rows, setNumOfRows] = useState(10)
    const [totalRows, setTotalRows] = useState(0)

    async function getCustomersAction() {
        try {
            const result = await getAllCustomersService(rows)
            setCustomers(result)
        } catch (error) {
            alert("error")
        }
    }

    async function getCustomersCountAction() {
        try {
            const result = await getCustomersCountService()
            setTotalRows(result)
        } catch (error) {
            alert("error")
        }
    }
    useEffect(() => {

        getCustomersAction()
        getCustomersCountAction()
        return () => {
            console.log("Unmount!")
        }
    }, [rows])
    async function handleSearchApi(searchText: string) {
        try {
            const result = await searchCustomersService(searchText)
            setCustomers(result)
        } catch (error) {
            alert("error")
        }
    }
    return <div >
        <Header text="Customers Page" />
        <SearchCustomers searchAction={handleSearchApi} allAction={getCustomersAction} />
        <Paginator first={10} rows={rows} totalRecords={totalRows} rowsPerPageOptions={[5, 10, 15]} onPageChange={(a: any) => {
            setNumOfRows(a.rows)

        }} />
        <CustomersTable customers={customers} />
    </div>
}


