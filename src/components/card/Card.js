import "./Card.css"
import bookmark from '../assets/bookmark.svg'
import checkedBookmark from '../assets/bookmark-clicked.svg'

export default function Cards() {
    return (
        <div className="card-container">
            <article className="card">
                <h2>Is this an interesting question?</h2>
                <button type="button" className="card__answerButton">Show answer</button>
                <div className="card__tag-container">
                    <div className="card__tag-container_tag">#HTML</div>
                    <div className="card__tag-container_tag">#React</div>
                    <div className="card__tag-container_tag">#JS</div>
                </div>
                <button type="button" className="card__bookmarkButton"><img className="bookmark" src={bookmark} alt="unchecked bookmark"/></button>
            </article>
            <article className="card">
                <h2>Maybe this one's better?</h2>
                <button type="button" className="card__answerButton">Show answer</button>
                <div className="card__tag-container">
                    <div className="card__tag-container_tag">#HTML</div>
                    <div className="card__tag-container_tag">#React</div>
                    <div className="card__tag-container_tag">#JS</div>
                </div>
                <button type="button" className="card__bookmarkButton"><img className="bookmark" src={checkedBookmark} alt="checked bookmark"/></button>
            </article>
        </div>
    )
}