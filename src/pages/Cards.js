import Card from "../components/card/Card";

  function Cards({cards, page, onDelete, onToggle}){
    if (page === "bookmark") {
        return (
        <div className="card-container">
            {cards.map(card => {
                if(card.bookmarked === true){
                    return <Card id={card.id} question={card.question} answer={card.answer} tags={card.tags} bookmarked={card.bookmarked} onDelete={onDelete} onToggle={onToggle}/>
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
                return <Card id={card.id} question={card.question} answer={card.answer} tags={card.tags} bookmarked={card.bookmarked} onDelete={onDelete} onToggle={onToggle}/>
                })}
            </div>
            )
    }

  }

  export default Cards;