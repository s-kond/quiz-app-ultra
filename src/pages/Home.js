import Card from "../components/card/Card";

 export function Home({cards, onDelete, onToggle}){
        return (
            <div className="card-container">
                {cards.map(card => {
                return <Card key={card.id} id={card.id} question={card.question} answer={card.answer} tags={card.tags} bookmarked={card.bookmarked} onDelete={onDelete} onToggle={onToggle}/>
                })}
            </div>
            )
    }