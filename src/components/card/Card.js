import "./Card.css"
import bookmark from '../assets/bookmark.svg'
import checkedBookmark from '../assets/bookmark-clicked.svg'

export default function Card({question, answer, tag, bookmarked = false}) {
    return (
        <article className="card">
            <h2>{question}</h2>
            <button type="button" className="card__answerButton">Hide answer</button>
            <p className="card__answer">{answer}</p>
            <div className="card__tag-container">
                <div className="card__tag-container_tag">#{tag}</div>
            </div>
            <button type="button" className="card__bookmarkButton"><img className="bookmark" src={bookmarked ? checkedBookmark : bookmark} alt="unchecked bookmark"/></button>
        </article>
    )
}