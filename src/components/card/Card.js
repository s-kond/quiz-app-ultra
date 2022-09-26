import "./Card.css"

export default function Cards() {
    return (
        <div class="card-container">
            <article class="card">
                <h2>Is this an interesting question?</h2>
                <button type="button" class="card__answerButton">Answer</button>
                <div class="card__tag-container">
                    <div class="card__tag-container_tag">#HTML</div>
                    <div class="card__tag-container_tag">#React</div>
                    <div class="card__tag-container_tag">#JS</div>
                </div>
                <button type="button" class="card__bookmarkButton">{/* <img src="../components/assets/bookmark-svgrepo-com.svg" alt="bookmark"/> */}B</button>
            </article>
            <article class="card">
                <h2>Maybe this one's better?</h2>
                <button type="button" class="card__answerButton">Answer</button>
                <div class="card__tag-container">
                    <div class="card__tag-container_tag">#HTML</div>
                    <div class="card__tag-container_tag">#React</div>
                    <div class="card__tag-container_tag">#JS</div>
                </div>
                <button type="button" class="card__bookmarkButton">{/* <img src="./bookmark-clicked.svg" alt="bookmark"/> */}B</button>
            </article>
        </div>
    )
}