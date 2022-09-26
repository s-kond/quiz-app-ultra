import "./Card.css"
import bookmark from '../assets/bookmark.svg'
import checkedBookmark from '../assets/bookmark-clicked.svg'

export default function Cards() {
    return (
        <div class="card-container">
            <article class="card">
                <h2>Is this an interesting question?</h2>
                <button type="button" class="card__answerButton">Show answer</button>
                <div class="card__tag-container">
                    <div class="card__tag-container_tag">#HTML</div>
                    <div class="card__tag-container_tag">#React</div>
                    <div class="card__tag-container_tag">#JS</div>
                </div>
                <button type="button" class="card__bookmarkButton"><img class="bookmark" src={bookmark} alt="unchecked bookmark"/></button>
            </article>
            <article class="card">
                <h2>Maybe this one's better?</h2>
                <button type="button" class="card__answerButton">Show answer</button>
                <div class="card__tag-container">
                    <div class="card__tag-container_tag">#HTML</div>
                    <div class="card__tag-container_tag">#React</div>
                    <div class="card__tag-container_tag">#JS</div>
                </div>
                <button type="button" class="card__bookmarkButton"><img class="bookmark" src={checkedBookmark} alt="checked bookmark"/></button>
            </article>
        </div>
    )
}