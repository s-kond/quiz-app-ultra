import Card from "../components/card/Card";

  function Cards({cards, page}){
    if (page === "bookmark") {
        return (
        <div className="card-container">
            {cards.map(card => {
                if(card.bookmarked === true){
                    return <Card id={card.id} question={card.question} answer={card.answer} tags={card.tags} bookmarked={card.bookmarked}/>
                } else {
                    return ""
                }
            })}
        </div>
        )
    } else {
        return (
            <div className="card-container">
                {cards.map(card => {
                return <Card id={card.id} question={card.question} answer={card.answer} tags={card.tags} bookmarked={card.bookmarked}/>
                })}
            </div>
            )
    }

  }

  export default Cards;