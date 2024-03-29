
import './App.css'
import EmployeesPage from './pages/employees'
import LoginPage from './pages/login'
import NotFound from './pages/notfound'
import ProductsPage from './pages/products'
import RegistrationPage from './pages/registration'
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";  
import 'primeicons/primeicons.css';
//import { Button } from 'primereact/button';
import React from "react";
import {Link, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import OrdersPage from './pages/orders'
import ShippersPage from './pages/shippers'
import SuppliersPage from './pages/suppliers'
import CustomersPage from './pages/customers'
import CartsPage from './pages/carts'
import CartPage from './pages/cart'
import { ProtectedRoute } from './pages/protected-route'






interface IRoute {
  path: string,
  key: string,
  component: any,
  label?: string
}

const routes: Array<IRoute> = [
  {
      path: "/login",
      component: <LoginPage />,
      key: "login",
      label: "Login"
  },
 
  {
      path: "/signup",
      component: <RegistrationPage />,
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
    path: "/orders",
    component: <OrdersPage />,
    key: "orders",
    label: "Orders"
},
{
    path: "/shippers",
    component: <ShippersPage />,
    key: "shippers",
    label: "Shippers"
},
{
    path: "/suppliers",
    component: <SuppliersPage />,
    key: "suppliers",
    label: "Suppliers"
},

  {
      path: "/customers",
      component: <CustomersPage />,
      key: "customers",
      label: "Customers"
  },
  {
    path: "/products",
    component: <ProductsPage />,
    key: "products",
     label: "Products"
},
{
  path: "/cart",
  component: <ProtectedRoute><CartsPage /></ProtectedRoute>,
  key: "cart",
 // label: "Carts"
},

{
  path: "/mycart",
  component:<ProtectedRoute><CartPage /></ProtectedRoute> ,
  key: "myCart",
  label: "MY Cart"
},
{
  path: "/login",
  component: <LoginPage />,
  key: "logout",
  label: "Logout"
},
  {
      path: "*",
      component: <NotFound />,
      key: "not found",
  }
]


function App() {

  return (
    
 
   
    <React.StrictMode>
  <Router>
  {/* <Button onClick={logoutHandler}> Log Out</Button> */}
    <div>
        {routes.filter(r => r.label).map((route: IRoute) => {
            return <Link key={route.label} to={route.path} > {route.label} </Link>
        })}
        <Routes>
            {routes.map((route: IRoute) => {
                return <Route path={route.path} key={route.key} element={route.component} />
            })}
        </Routes>
    </div>
    </Router>
    </React.StrictMode>

  )
}

export default App
