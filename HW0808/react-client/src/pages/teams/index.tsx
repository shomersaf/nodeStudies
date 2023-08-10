import { useEffect, useState } from "react"
import axios from "axios"
import { Loader } from "../../ui/loader"
import TeamsCard from "./card"

interface ITeams {
    teamId: number,
    teamName: string,
    city: string,
    mainColor: string,
    secondaryColor: string,
    semel:string
}


export default function TeamsPage() {
    const [teams, setTeams] = useState<Array<ITeams>>([])
    async function getTeamsAction() {
        try {
            const result = await getAllTeamsService()
            setTeams(result)
        } catch (error) {
            alert("error")
        }
    }

    
    useEffect(() => {
        getTeamsAction()
 
    }, [])
 


    return <div style={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"center"}}>
        <div>
        <h2>Teams</h2>
        </div>
     <div style={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"space-evenly"}}></div>

   {teams.length?  <TeamsCard teams={teams}/>  :<Loader />}
    </div>
}


async function getAllTeamsService(): Promise<Array<ITeams>> {
    const { data, headers } = await axios.get(`http://localhost:4001/teams`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const teams: Array<ITeams> = data.map(t => {
        return {
            teamId: t.teamId,
            teamName: t.teamName,
            city: t.city,
            mainColor: t.mainColor,
            secondaryColor: t.secondaryColor,
            semel:t.semel
    }})
    return teams;
}