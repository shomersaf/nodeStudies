import { useEffect, useState } from "react"
import axios from "axios"
import { Loader } from "../../ui/loader"
import GamesCard from "./card"

interface IGames {
    //gameTimeA, TeamA, TeamA_score, TeamB_score, TeamB
    gameTimeA: Date,
    TeamA: string,
    TeamA_score: number,
    TeamB_score: number,
    TeamB:string  
}


export default function GamesPage() {
    const [games, setGames] = useState<Array<IGames>>([])
    async function getGamesAction() {
        try {
            const result = await getAllGamesService()
            setGames(result)
        } catch (error) {
            alert("error")
        }
    }

    
    useEffect(() => {
        getGamesAction()
 
    }, [])
 


    return <div style={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"center"}}>
        <div>
        <h2>Games</h2>
        </div>
     <div style={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"space-evenly"}}></div>
 
   {games.length?  <GamesCard games={games} />:<Loader />}
    </div>
}


async function getAllGamesService(): Promise<Array<IGames>> {
    const { data, headers } = await axios.get(`http://localhost:4001/games`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const games: Array<IGames> = data.map(g => {
        return {
            gameTimeA: g.gameTimeA,
            TeamA: g.TeamA,
            TeamA_score: g.TeamA_score,
            TeamB_score: g.TeamB_score,
            TeamB:g.TeamB  
    }})
    return games;
}