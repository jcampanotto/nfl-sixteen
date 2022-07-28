import CardItem from "./CardItem"
import CardData from "./data/CardData"

function CardList() {
  return (
    <div className="flex mt-5">
      {CardData.map((card) => (
        <CardItem key={card.owner} card={card}/>
      ))}
    </div>

  )
}

export default CardList