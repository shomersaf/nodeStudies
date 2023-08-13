
import { Card } from 'primereact/card';
interface IMeetings {
    meetupId: number,
    teamName: string,
    fromDate: Date,
    toDate: Date,
    topic: string,
    room: number
}

export default function MeetingsCard(props: { meetings: Array<IMeetings> }) {
    return props.meetings.map((e) => {
        return <Card style={{
            color: "purple", margin: "10px",
            width: "fitContent",
            padding: "10px",
            border: "6px solid white",
            backgroundColor:" rgb(187, 187, 211)"
        }}
            title={e.teamName} key={e.meetupId}>  
            <h2>{'teamName: '+ e.teamName}</h2>
            <h2>{'fromDate: '+ e.fromDate}</h2>
            <h2>{'toDate: '+ e.toDate}</h2>
            <h2>{'topic: '+ e.topic}</h2>
            <h2>{'room: '+ e.room}</h2>
        </Card>
    })

  



}