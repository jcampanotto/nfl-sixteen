import WeekData from '../data/WeekData'
import WeekBubbleItem from './WeekBubbleItem'

function WeekBubbleList(props) {

  return (
    <>
    {/* WDropdown displayed at <= 1120px => See WeekDropdown.jsx component*/}
    
    {/* WBubbles displayed at > 1120px */}
    <div className="weekBubblesContainer flex align-center justify-center container m-auto">
      <div className="btn-group" onChange={(e) => props.handleChangeWeek(e)}>
        {WeekData.map((item, i) => (
          <WeekBubbleItem key={item.weekNum} item={item} defaultWeek={props.defaultWeek} />
        ))}
      </div>
    </div>
    </>
  )
}

export default WeekBubbleList