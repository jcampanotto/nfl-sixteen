import WeekData from './data/WeekData'
import WeekBubbleItem from './WeekBubbleItem'

function WeekBubbleList() {
  function changeWeek(event) {
    console.log(event.target.value) // TODO remove logs button clicked
  }

  return (
    <>
    {/* WDropdown displayed at <= 1120px => See WeekDropdown.jsx component*/}
    
    {/* WBubbles displayed at > 1120px */}
    <div className="weekBubblesContainer flex align-center justify-center container m-auto">
      <div className="btn-group" onChange={changeWeek}>
        {WeekData.map((item, i) => (
          <WeekBubbleItem key={item.weekNum} item={item} />
        ))}
      </div>
    </div>
    </>
  )
}

export default WeekBubbleList