// import { SubmitHandler, useForm } from "react-hook-form"
// import { Button } from 'primereact/button';

import axios from "axios"


// import { useNavigate } from "react-router-dom"
// interface ITeam {
//     teamId: number,
//     teamName: string,
//     city: string,
//     mainColor: string,
//     secondaryColor: string,
//     semel:string
// }
export default function TeamInfoPage() {
 
    
    const urlParams = document.URL;
    const teamId = urlParams.slice(urlParams.indexOf('info/') + 5);
  //console.log(teamId)
   getTeamPage(+teamId)

    
   

        return <div>
             <h2> Team INFO Id: {teamId}</h2>
            <h3>I just have hadn't time to complete it</h3>
            <h4>Whole the team info is here, but you can see in only in console -it's temporary solution  till I complete it </h4>
        </div>
   
   async function getTeamPage(teamId: number) {
  
    const result = await axios.get(`http://localhost:4001/team/info/${teamId}`)
    const {data} =result
        if (!data) throw new Error(`Error Please contact support`)
        const team ={...data[0]}
//alert(`${data[0].teamName},${data[0].city}`)
   console.log(`${team.teamName}, ${team.city},${team.mainColor}, ${team.secondaryColor}, ${team.semel}`)
     return team
    }
    }
