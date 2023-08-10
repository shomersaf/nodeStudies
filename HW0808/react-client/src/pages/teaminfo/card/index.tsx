import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
//import { useNavigate } from "react-router-dom"

interface ITeam {
    teamId: number,
    teamName: string,
    city: string,
    mainColor: string,
    secondaryColor: string,
    semel:string
}

export default function TeamInfoCard(props: { team: Array<ITeam> }) {
    //const navigate = useNavigate()
    return props.team.map((key) => {
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
        </Card>
    })
    }


