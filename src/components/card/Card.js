import "./Card.css"
import { useState } from "react";
import bookmark from '../assets/bookmark.svg'
import checkedBookmark from '../assets/bookmark-clicked.svg'
import { NavLink } from "react-router-dom";

export default function Card({id, question, answer, tags, bookmarked, onDelete, onToggle}) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <article className="card">
            <NavLink to={`/details/${id}`}>
            <h2>{question}</h2>
            </NavLink>
            <button type="button" className="card__answerButton" onClick={()=> setShowAnswer(!showAnswer)}>{showAnswer ? "Hide answer" : "Show answer"}</button>
            <p className={showAnswer ? "card__answer" : "card__answer hidden"}>{answer}</p>
            <div className="card__tag-container"> 
                {tags.map(tag => <div key={Math.random()} className="card__tag-container_tag">#{tag}</div>)}
            </div>
            <button type="button" className="card__deleteButton" onClick={() => onDelete(id)}>X</button>
            <button type="button" className="card__bookmarkButton" onClick={()=> onToggle(id)} ><img className="bookmark" src={bookmarked ? checkedBookmark : bookmark} alt="unchecked bookmark"/></button>
        </article>
    )
}