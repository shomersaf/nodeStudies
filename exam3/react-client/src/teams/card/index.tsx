
import { Card } from 'primereact/card';

interface ITeams {
    id:number,
    teamName:string
    }
    
export default function TeamsCard(props: { teams: Array<ITeams> }) {
    return props.teams.map((e) => {
        return <Card style={{
            color: "purple", margin: "10px",
            width: "fitContent",
            padding: "10px",

            border: "6px solid white",
            backgroundColor:" rgb(187, 187, 211)"
        }}
            title={e.teamName} key={e.teamName}>  
            <h2>{'id: '+ e.id}</h2>
            <h2>{'teamName: '+ e.teamName}</h2>
        </Card>
    })

  



}