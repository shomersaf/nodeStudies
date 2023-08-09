
import { Card } from 'primereact/card';
interface IGames {
    gameTimeA: Date,
    TeamA: string,
    TeamA_score: number,
    TeamB_score: number,
    TeamB:string  
}

export default function GamesCard(props: { games: Array<IGames> }) {
    return props.games.map((e) => {
        return <Card style={{
            color: "purple", margin: "10px",
            width: "50%",
            padding: "10px"
        }}
            title={e.TeamA + ' vs ' +e.TeamB} key={Math.floor(Math.random() * 10+1)}>  
            <h2>{new Date(e.gameTimeA).toLocaleString()}</h2>
            <h1>{e.TeamA_score + ' : ' +e.TeamB_score}</h1>
        </Card>
    })

  



}