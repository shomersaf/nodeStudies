import './App.css'
import { useState } from "react"
import { Header } from './components/ui-components/header'
import CountriesPage from './components/pages/countries'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import { Button } from 'primereact/button'
import LoginForm from './components/pages/login'
import NotFound from './components/pages/not-found'
import RegistrationComponent from './components/pages/signup'
import { ProtectedRoute } from './components/ui-components/protected-route'
import EmployeesPage from './components/pages/employees'
import CustomersPage from './components/pages/customers'

interface IRoute {
    path: string,
    key: string,
    component: any,
    label?: string
}
const routes: Array<IRoute> = [
    {
        path: "/login",
        component: <LoginForm />,
        key: "login",

    },
    {
        path: "/countries",
        component: <ProtectedRoute><CountriesPage /></ProtectedRoute>,
        key: "countries",
        label: "Countries"
    },
    {
        path: "/signup",
        component: <RegistrationComponent />,
        key: "signup",
        label: "Signup"
    },
    {
        path: "/employees",
        component: <EmployeesPage />,
        key: "employees",
        label: "Employees"
    },
    {
        path: "/customers",
        component: <CustomersPage />,
        key: "customers",
        label: "Customers"
    },
    {
        path: "*",
        component: <NotFound />,
        key: "not found",
    }
]


function App() {
    const navigate = useNavigate();
    function logoutHandler() {
        navigate("/login")
    }
    return (
        <div>
            <div style={{ width: "100%", top: 0, left: 0, position: "absolute", textAlign: "right" }}>
                <Button onClick={logoutHandler}> Log Out</Button>
            </div>
            <div style={{ marginTop: "50px" }}>
                {routes.filter(r => r.label).map((route: IRoute) => {
                    return <Link key={route.label} to={route.path} > {route.label} </Link>
                })}
                <Routes>
                    {routes.map((route: IRoute) => {
                        return <Route path={route.path} key={route.key} element={route.component} />
                    })}
                </Routes>
            </div>
        </div>
    )
}




export default App


// class Test {
//     constructor(_name) {
//         this.name = _name
//     }
//     setName(newName) {
//         this.name = newName
//     }
//     getName() {
//         return this.name
//     }
// }