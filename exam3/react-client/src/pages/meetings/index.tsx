import { useEffect, useState } from "react"
import axios from "axios"

import { Loader } from "../../ui/loader"
import MeetingsCard from "./card"




interface IMeetings {
    meetupId: number,
    teamName: string,
    fromDate: Date,
    toDate: Date,
    topic: string,
    room: number
}


export default function MeetingsPage() {
    const [meetings, setMeetings] = useState<Array<IMeetings>>([])
    async function getMeetingsAction() {
        try {
            const result = await getAllMeetingsService()
            setMeetings(result)
        } catch (error) {
            alert("error")
        }
    }

    
    useEffect(() => {
        getMeetingsAction()
 
    }, [])
 


    return <div style={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"center"}}>
        <div>
        <h2>Meetings</h2>
        </div>
     <div style={{display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"space-evenly"}}></div>
 
   {meetings.length?  <MeetingsCard meetings={meetings} />:<Loader />}
    </div>
}


async function getAllMeetingsService(): Promise<Array<IMeetings>> {
    const { data, headers } = await axios.get(`http://localhost:4001/meetings`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const meetings: Array<IMeetings> = data.map(m => {
        return {
     meetupId: m.meetupId,
    teamName: m.teamName,
    fromDate:m.fromDate,
    toDate:m.toDate,
    topic: m.topic,
    room: m.room
       }})
    return meetings;
}