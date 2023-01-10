import ScheduleSelector from 'react-schedule-selector'

export const Scheduler = () => {
        
    state = { schedule = [] }

    handleChange = newSchedule => {
        this.setState({ schedule: newSchedule })
    }


    return (
        <ScheduleSelector
        selection={this.state.schedule}
        numDays={5}
        minTime={8}
        maxTime={22}
        hourlyChunks={2}
        onChange={this.handleChange}
        />
    )

}

export default ScheduleSelector;