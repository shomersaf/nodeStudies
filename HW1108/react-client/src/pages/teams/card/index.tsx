import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom"
// import axios from "axios"
interface ITeams {
    teamId: number,
    teamName: string,
    city: string,
    mainColor: string,
    secondaryColor: string,
    semel:string
}



export default function TeamsCard(props: { teams: Array<ITeams> }) {
    const navigate = useNavigate()
    return props.teams.map((key) => {

        return <Card style={{
            color: "purple", margin: "10px",
            width: "fit-content",
            padding: "10px"
        }}
            title={key.teamName} key={key.teamId}>
            <h4>{'City: ' + key.city}</h4>
            <p>{'main Color: ' + key.mainColor}</p>
            <div style={{background:key.mainColor,width:"100%",height:"20px"}}></div>
            <p>{'secondary Color: ' + key.secondaryColor}</p>
            <div style={{background:key.secondaryColor,width:"100%",height:"20px", marginBottom:"20px"}}></div>
            
            <Image src={key.semel} alt="Image" width="250" />
            <Button onClick={() => {     setTimeout(() => { navigate(`/team/info/${key.teamId}`) }, 500); }} style={{ marginLeft: "10px" }} >Team Page</Button>
        </Card>
    })

  
  

    //getTeamPage(key.teamId)
        // async function getTeamPage(teamId: number): Promise<Array<ITeams>> {
  
        // const { data} = await axios.get(`http://localhost:4001/team/info/${teamId}`)
        //     if (!data) throw new Error(`Error Please contact support`)
       
   
        //  return data
        // }
    }


