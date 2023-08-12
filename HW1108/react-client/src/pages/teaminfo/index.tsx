
// import axios from "axios"
// import TeamInfoCard from "./card"
// import { Loader } from "../../ui/loader";

// export default function TeamInfoPage() {
//   const urlParams = document.URL;
//   const teamId = urlParams.slice(urlParams.indexOf('info/') + 5);

//   getTeamPage(+teamId)
 
//   return <div>
//     <h2> Team INFO Id: {teamId}</h2>
//     {team?  <TeamInfoCard team={team} />:<Loader />}
//   </div>


// }
// async function getTeamPage(teamId: number) {
//   const result = await axios.get(`http://localhost:4001/team/info/${teamId}`)
//   const { data } = result
//   if (!data) throw new Error(`Error Please contact support`)
//   const team = { ...data[0] }
//   console.log(`${team.teamName}, ${team.city},${team.mainColor}, ${team.secondaryColor}, ${team.semel}`)
//   return team
// }
import { useEffect, useState } from "react"
import axios from "axios"
import { Loader } from "../../ui/loader"
import TeamsCard from "./card"

interface ITeam {
    teamId: number,
    teamName: string,
    city: string,
    mainColor: string,
    secondaryColor: string,
    semel:string
}


export default function TeamInfoPage() {
  const urlParams = document.URL;
 const teamId = urlParams.slice(urlParams.indexOf('info/') + 5);
    const [team, setTeam] = useState<Array<ITeam>>([])
    async function getTeamAction() {
        try {
            const result = await getAllTeamService(+teamId)
            setTeam(result)
        } catch (error) {
            alert("error")
        }
    }

    useEffect(() => {
        getTeamAction()
 
    }, [])
 
    return <div style={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"center"}}>
        <div>
        <h2>Team INFO Id: {teamId}</h2>
        </div>
     <div style={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"space-evenly"}}></div>
   {team.length?  <TeamsCard team={team} />:<Loader />}
    </div>
}


async function getAllTeamService(teamId: number): Promise<Array<ITeam>> {
    const { data, headers } = await axios.get(`http://localhost:4001/team/info/${teamId}`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)
    //const team = { ...data[0] }
    const team: Array<ITeam> = data.map(t => {
        return {
            teamId: t.teamId,
            teamName: t.teamName,
            city: t.city,
            mainColor: t.mainColor,
            secondaryColor: t.secondaryColor,
            semel:t.semel
    }})
    return team;
}