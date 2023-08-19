import { useSelector } from "react-redux"
import { RootState } from "../../app/store"


export default function Vacations() {
    const vacations = useSelector((state:RootState)=>state.vacations.vacations)
    return <div>
        <h1>Vacations</h1>
    <div>
    {vacations.map(
        v=> { 
        return <div key={v.destination} style={{ background:"#ffccff", margin:"10px auto", width:"70%", padding:"10px"}}>
   <h2><span className="whatIsIt">Destination:</span> {v.destination}</h2>
   <img src={v.src} className="vacationImage" />
   <p>	<span className="hearts">&hearts;</span> <span className="likes">{v.likes}</span></p>
   <h3><span className="whatIsIt">Who is:</span> {v.whoIs}</h3>
        </div>}
     )}
    </div>
    </div>
}