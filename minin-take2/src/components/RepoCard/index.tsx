import { useActions } from "../../hooks/actions"
import { useAppSelector } from "../../hooks/redux"
import { IRepo } from "../../models"
import React from 'react'
import {useState} from 'react'

export function RepoCard({repo}:{repo:IRepo}){
   const {addFavourite, removeFavourite} =useActions()
   const {favourites} = useAppSelector(state => state.github)
   const [isFav,setIsFav] = useState(favourites.includes(repo.html_url))
   const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>)=>{
      event.preventDefault()
      addFavourite(repo.html_url)
      setIsFav(true)
   }
   const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>)=>{
      event.preventDefault()
      removeFavourite(repo.html_url)
      setIsFav(false)
   }
 return(
   <a href={repo.html_url} target="_blank" className="aRepo">
    <div className="repoCard">
    <h2>{repo.full_name}</h2>
    <p><span>Forks: </span>{repo.forks}
    <span>Watchers: </span>{repo.watchers}</p>
    <p>{repo?.description}</p>
    </div>
   {!isFav && <button className="addButton" onClick={addToFavourite}>Add</button>}
   { isFav && <button className="removeButton" onClick={removeFromFavourite}>Remove</button>}
    </a>
 )
}