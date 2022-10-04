import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export function Create({onHandleSubmit}){
    const navigate = useNavigate()
    
    function onSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const { newQuestion, newAnswer, newTag } = form.elements;
        console.log(newQuestion.value);
        onHandleSubmit(newQuestion.value, newAnswer.value, newTag.value);
        navigate("/");
      }
    
    return (
        <>
        <CreateForm onSubmit={onSubmit}>
            <Subheader>Create a new question card</Subheader>
            <label htmlFor="newQuestion">Your question:</label>
            <textarea className="add-card__question" name="newQuestion" id="newQuestion" cols="30" rows="5" placeholder="max. 150 letters" maxLength="150" required></textarea>

            <label htmlFor="newAnswer" className="add-card-gap">Your answer:</label>
            <textarea className="add-card__answer" name="newAnswer" id="newAnswer" cols="30" rows="5" placeholder="max. 150 letters" maxLength="150" required></textarea>
        
            <label htmlFor="newTag" className="add-card-gap">Tags:</label>
            <input type="text" maxLength="20" id="newTag" name="newTag" placeholder="optional"/>

            <button type="submit">Create Card</button>
        </CreateForm>
        <div className="card-container"></div>
        </>
    )}

    const Subheader = styled.h2`
        text-align: center;
    `
    
    const CreateForm = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px; 
    `