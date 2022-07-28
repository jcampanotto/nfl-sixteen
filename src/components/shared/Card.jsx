// In here is where I'm going to be fetching data from my database to build the cards based on user choices
// If it's not an active week or a previous week then all 
// we see is the schedule for the week, a single card (this info more relevant in CardItem)


function Card( {card} ) {
  console.log(card)
  return (
    <>
        <div className="snap-center card w-96 bg-base-300 shadow-xl mr-2">
          <div className="div card-body">
            <h2 className="card-title">Card Title!</h2>
            <p>{card.owner}</p>
          </div>
        </div>
    </>

  )
}

export default Card