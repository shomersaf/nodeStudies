import DetailsCard from "../../components/DetailsCard";
import Filter from "../../components/Filter";
import Search from "../../components/Search";
import {useEffect} from 'react'
import { fetchAirports } from "../../store/actions/airportActions";
import { useAppDispatch } from "../../hooks/redux";

export default function MainPage(){
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(fetchAirports())
    },[])
    return(
        <div>
            <h2 className="container mx-auto max-w-[fit-content] pt-5">Home</h2>
            <Search />
            <Filter />
            <DetailsCard />
        </div>
    )
}