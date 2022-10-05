import { useParams } from "react-router-dom";
import Card from "../components/card/Card";

export default function CardDetails({cards, onDelete, onToggle}){
    const {id} = useParams();
    let filteredCard = cards.filter(card => card.id === id);
    const {question, answer, bookmarked, tags} = filteredCard[0];
    
    return (
        <div className="card-container">
        <Card key={id} id={id} question={question} answer={answer} tags={tags} bookmarked={bookmarked} onDelete={onDelete} onToggle={onToggle}/>
       </div>
    )
}