
import './App.css'

import NotFound from './pages/notfound'
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";  
import 'primeicons/primeicons.css';
//import { Button } from 'primereact/button';
import React from "react";
import {Link, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GamesPage from './pages/games'
import TeamsPage from './pages/teams';

//import { ProtectedRoute } from './pages/protected-route'






interface IRoute {
  path: string,
  key: string,
  component: any,
  label?: string
}

const routes: Array<IRoute> = [

 
  {
    path: "/games",
    component: <GamesPage />,
    key: "games",
    label: "Games"
},
{
    path: "/teams",
    component: <TeamsPage />,
    key: "teams",
    label: "Teams"
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
