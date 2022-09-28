import "./Card.css"
import { useState } from "react";
import bookmark from '../assets/bookmark.svg'
import checkedBookmark from '../assets/bookmark-clicked.svg'

export default function Card({question, answer, tags}) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [bookmarked, setBookmarked] = useState(false); 

    return (
        <article className="card">
            <h2>{question}</h2>
            <button type="button" className="card__answerButton" onClick={()=> setShowAnswer(!showAnswer)}>{showAnswer ? "Hide answer" : "Show answer"}</button>
            <p className={showAnswer ? "card__answer" : "card__answer hidden"}>{answer}</p>
            <div className="card__tag-container">
                {tags.map(tag => {
                    return <div key={Math.random()} className="card__tag-container_tag">#{tag}</div>
                })}
            </div>
            <button type="button" className="card__bookmarkButton" onClick={()=> setBookmarked(!bookmarked)}><img className="bookmark" src={bookmarked ? checkedBookmark : bookmark} alt="unchecked bookmark"/></button>
        </article>
    )
}