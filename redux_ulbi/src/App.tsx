

import { useEffect } from 'react';
import './App.css'
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreator';
import PostContainer from "./components/PostContainer";


function App() {
const {users, isLoading, error} = useAppSelector(state => state.userReducer)
const dispatch = useAppDispatch()
useEffect(()=>{
  dispatch(fetchUsers())
},[])
  return (
    <>
    <h1>Ulbi React Redux Toolkit Studies</h1>
    {isLoading && <h3>Loading...</h3>}
    {error && <h3>{error}</h3>}
{JSON.stringify(users, null, 2)}
<PostContainer />
    </>
  )
}

export default App
