import { useAppSelector } from "../../hooks/redux"

export default function FavouritesPage(){
   const {favourites} = useAppSelector(state => state.github)
   if(favourites.length === 0) return <p>No items</p>
    return(
        <div>
            <h3>Favourites</h3>
            <ul>
{favourites.map(f => (
    <li key={f}>
        <a href={f} target ="_blank">{f}
        </a>

    </li>
))}
            </ul>
        </div>
    )
}