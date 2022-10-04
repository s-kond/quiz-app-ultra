import Card from "../components/card/Card";

export function Bookmarks({cards, onDelete, onToggle}){
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
  }