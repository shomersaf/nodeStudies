import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from 'primereact/button';
import axios from "axios"
import { Calendar } from 'primereact/calendar';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

import { Dropdown } from 'primereact/dropdown';

export default function MeetingPage() {

    interface IMeeting {
        meetupId: number,
        teamName: string,
        fromDate: Date,
        toDate: Date,
        topic: string,
        room: number
    }
    

    interface ITeam {
        id:number,
        teamName:string
        }
        
    
    const { register, handleSubmit, formState: { errors },reset,getValues } = useForm<IMeeting>({mode:'onChange'})
    const navigate = useNavigate()
    const [fromDate, setFromDate] = useState(new Date(Date.now()))
    const [toDate, setToDate] = useState(new Date(Date.now()))
    const [teamName, setTeamName] = useState<any>()
    const [teams, setTeams] = useState<Array<ITeam>>([])
    const onSubmit: SubmitHandler<IMeeting> = () => {
        if (!teamName) { alert(`No team selected`) } else {
            postTeam()
            reset()
        }
    }


    async function postTeam( ) {
        try{
            const result = await axios.post(`http://localhost:4001/meetings/new`, {
            teamName: teamName.teamName,
            fromDate:new Date(fromDate).toISOString().replace("Z", " ").slice(0, 19),
            toDate:new Date(toDate).toISOString().replace("Z", " ").slice(0, 19),
            topic:getValues('topic'),
            room:Number(getValues('room'))})
            if(result?.data) alert(`The new meeting is added`)
            setTimeout(() => { navigate("/meetings") }, 500)
        }catch(e){
            alert(`Something went wrong`)
        }
    }

    async function getAllTeamsService(): Promise<Array<ITeam>> {
    
        const { data, headers } = await axios.get(`http://localhost:4001/teams`)
        if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)
    
         const actualTeams= data.map(t => {
            return {
                id:t.id,
                teamName:t.teamName}})
        setTeams(actualTeams)
                
        return teams;
    }


      
    useEffect(() => {
        getAllTeamsService()

    }, [])
 

    return <div >
        <h2>New Meeting</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

        <Dropdown value={teamName} onChange={(e) => setTeamName(e.value)} options={teams} optionLabel="teamName" 
    placeholder="Select a Team" className="w-full md:w-14rem" />

            <div style={{ marginTop: "10px" }}>
            <Calendar value={fromDate} onChange={(e: any) => setFromDate(e.value)} showIcon showTime hourFormat="24"/>
            </div>
           <div style={{ marginTop: "10px" }}>
           <Calendar value={toDate} onChange={(e: any) => setToDate(e.value)} showIcon showTime hourFormat="24" />
           </div>
          
           <div style={{ marginTop: "10px" }}>
           <input {...register('topic', { required: "topic is required!"})} type="text" placeholder="topic:"></input>
            {errors?.topic && <div style={{ color: "red" }}>{errors.topic && <div style={{ color: "red" }}>{errors?.topic?.message}</div>}</div>}
           </div>

           <div style={{ marginTop: "10px" }}>
           <input {...register('room', { required: "room is required!"})} type="text" placeholder="room:"></input>
            {errors?.room && <div style={{ color: "red" }}>{errors.room && <div style={{ color: "red" }}>{errors?.room?.message}</div>}</div>}
           </div>

            <div style={{ marginTop: "10px" }}><Button>Add</Button></div>
        </form>
    </div>
}


