import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  console.log(props.timelineData.events)
  const timeLineComponents = props.timelineData.events.map(data => {
    return (
      <div className='timeline'><TimelineEvent data={data}/></div>
    )
  })
  return (
    <div>
      {timeLineComponents}
    </div>
  )
};

export default Timeline;