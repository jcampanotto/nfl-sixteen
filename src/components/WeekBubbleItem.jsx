function WeekBubbleItem({item}) {
  const currentWeek = 12 // toy value; will actually fetch from Context API / App State which is itself fetched by the NFL API
  // Setting a default checked is a little more complicated and will be a part of the onChange I think. Not sure yet but it's not trivial

  if (item.weekNum > currentWeek) {
    return (
      <input key={item} type="radio" name="weekSelection" value={item.weekNum} data-title={`W${item.weekNum}`} className="btn btn-sm mr-1 btn-ghost" />
    )
  }

  return (
    <input key={item} type="radio" name="weekSelection" value={item.weekNum} data-title={`W${item.weekNum}`} className="btn btn-accent btn-sm mr-1" />
  )

}

export default WeekBubbleItem