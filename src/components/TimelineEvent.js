import './TimelineEvent.css';
import TimeStamp from './TimeStamp';

const TimelineEvent = (props) => {
    return (
        <div className="timeline-event">
            <h3 className='event-person'>{props.data.person}</h3>
            <p className='event-time'><TimeStamp time={props.data.timestamp} /></p>
            <p className='event-status'>{props.data.status}</p>
        </div>
        
    )
};

export default TimelineEvent;