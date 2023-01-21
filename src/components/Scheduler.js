import ScheduleSelector from 'react-schedule-selector'
import { useState, useEffect } from "react";
import  { useParams } from 'react-router-dom';
const Scheduler = () => { 
    const { name } = useParams();
    console.log({name});
    // state = { schedule = [] }
    const [Schedule, setSchedule] = useState([]);
    const handleChange = newSchedule => {
    setSchedule(newSchedule)
    }

    return (
        <ScheduleSelector
            selection={Schedule}
            numDays={5}
            minTime={8}
            maxTime={22}
            hourlyChunks={4}
            timeFormat={"h:mma"}
            onChange={handleChange}
        />

    )
}
export default Scheduler
