
import { Card } from 'primereact/card';
interface IGames {
    gameTimeA: Date,
    TeamA: string,
    TeamA_score: number,
    TeamB_score: number,
    TeamB:string  
}

export default function GamesCard(props: { games: Array<IGames> }) {
    return props.games.map((key) => {
        return <Card style={{
            color: "purple", margin: "10px",
            width: "50%",
            padding: "10px"
        }}
            title={key.TeamA + ' vs ' +key.TeamB} key={key.TeamA+key.TeamB}>  
            <h2>{new Date(key.gameTimeA).toLocaleString()}</h2>
            <h1>{key.TeamA_score + ' : ' +key.TeamB_score}</h1>
        </Card>
    })

  



}