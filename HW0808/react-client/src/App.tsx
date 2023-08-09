
import './App.css'

import NotFound from './pages/notfound'
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";  
import 'primeicons/primeicons.css';
//import { Button } from 'primereact/button';
//import React from "react";
import {Link, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GamesPage from './pages/games'
import TeamsPage from './pages/teams';
import TeamPage from './pages/team';
import GamePage from './pages/game';
import TeamInfoPage from './pages/teaminfo';

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
    label: "Games |"
},
{
    path: "/teams",
    component: <TeamsPage />,
    key: "teams",
    label: " Teams |"
},

{
  path: "/team/new",
  component: <TeamPage />,
  key: "team",
  label: " New Team |"
},
{
  path: "/team/info/:teamId",
  component: <TeamInfoPage />,
  key: "teaminfo",
 // label: " Team |"
},

{
  path: "/game/new",
  component: <GamePage />,
  key: "team",
  label: " New Game"
},

  {
      path: "*",
      component: <NotFound />,
      key: "not found",
  }
]


function App() {

  return (
    
 
   

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
 

  )
}

export default App
