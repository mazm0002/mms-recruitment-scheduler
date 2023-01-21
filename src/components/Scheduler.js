import ScheduleSelector from 'react-schedule-selector'
import { useState, useEffect } from "react";
export const Scheduler = () => { 

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
            hourlyChunks={2}
            onChange={handleChange}
        />
    )
}
export default Scheduler
