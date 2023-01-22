import ScheduleSelector from 'react-schedule-selector'
import { useState, useEffect } from "react";
import  { useParams } from 'react-router-dom';
import { doc, updateDoc, collection } from "firebase/firestore";
import db from './firebase';
const Scheduler = () => { 
    const { name } = useParams();
    console.log({name});
    // state = { schedule = [] }
    const [Schedule, setSchedule] = useState([]);
    const handleChange = newSchedule => {
    setSchedule(newSchedule)
    sendMessage(newSchedule)
    }

    const sendMessage = (newSchedule) => {
        const usersRef = db.collection('users').doc('Munir')

        usersRef.get()
          .then((docSnapshot) => {
            if (docSnapshot.exists) {
              usersRef.onSnapshot((doc) => {
                // do stuff with the data
                console.log(doc.data());
              });
            } else {
              usersRef.set({'4902384902':"yaboi"}) // create the document
            }
        });
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
