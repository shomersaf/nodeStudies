// here we will utilize the toolkit slices in addition to RTK query ppossibilities
import {createSlice,PayloadAction} from '@reduxjs/toolkit'

interface GithubState {
    favourites:string[]
    //array of strings
}
const LS_FAV_KEY = 'rfk'
const initialState: GithubState ={
    favourites:JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
    //it means that if there won't be any daya in LS, an empty is to be parsed into JSON
}
export const githubSlice = createSlice({
    name:'github',
   initialState,
   reducers:{
    addFavourite(state,action:PayloadAction<string>){
     state.favourites.push(action.payload)
     localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
    },
    removeFavourite(state,action:PayloadAction<string>){
    state.favourites = state.favourites.filter(f => f !== action.payload)
    localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
    }
   }
})
export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer
//the reducer should be registrated in store