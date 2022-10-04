import "./Create.css"

export default function Create({onHandleSubmit}){
    function onSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const { newQuestion, newAnswer, newTag } = form.elements;
        console.log(newQuestion.value);
        onHandleSubmit(newQuestion.value, newAnswer.value, newTag.value);
      }
    
    return (
        <>
        <form onSubmit={onSubmit}>
            <h2>Create a new question card</h2>
            <label htmlFor="newQuestion">Your question:</label>
            <textarea className="add-card__question" name="newQuestion" id="newQuestion" cols="30" rows="5" placeholder="max. 150 letters" maxLength="150" required></textarea>

            <label htmlFor="newAnswer" className="add-card-gap">Your answer:</label>
            <textarea className="add-card__answer" name="newAnswer" id="newAnswer" cols="30" rows="5" placeholder="max. 150 letters" maxLength="150" required></textarea>
        
            <label htmlFor="newTag" className="add-card-gap">Tags:</label>
            <input type="text" maxLength="20" id="newTag" name="newTag" placeholder="optional"/>

            <button type="submit">Create Card</button>
        </form>
        </>
    )}