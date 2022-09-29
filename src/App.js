import './App.css';
import Header from './components/header/Header';
import Nav from './components/navigation/Navigation';
import Cards from './pages/Cards';
import Create from './pages/Create/Create';
import Profile from './pages/Profile/Profile';
import {nanoid} from "nanoid";
import { useState } from 'react';

const cards = [
  {id: nanoid(), question: "Are penguins able to fly?", answer: "Unfortunately not", tags: "penguins", bookmarked: true},
  {id: nanoid(), question: "What do penguins like the most?", answer:"Fish", tags: "penguins", bookmarked: false},
  {id: nanoid(), question: "Do penguins live north or south of the equator?", answer:"South", tags: "penguins", bookmarked: true}
]

function App() {
  const [activePage, setActivePage] = useState("home");
  const [cardArray, setCards] = useState(cards);

  function appendCard(newQuestion, newAnswer, newTag){
    setCards([...cardArray, {id: nanoid(), question: newQuestion, answer: newAnswer, tags: newTag, bookmarked: false}])
  }

  function deleteCard(cardId){
    setCards(cardArray.filter(card => card.id !== cardId));
  }

  function toggleBookmark(cardId){
    setCards(
      cardArray.map((card) =>
        card.id === cardId ? { ...card, bookmarked: !card.bookmarked } : card
      )
    );
  }

  return (
    <div className="App">
     <Header/>
    {activePage === "home" ? <Cards cards={cardArray} page={activePage} onDelete={deleteCard} onToggle={toggleBookmark}/> 
      : activePage === "bookmark" ? <Cards cards={cardArray} page={activePage} onDelete={deleteCard} onToggle={toggleBookmark}/> 
      : activePage === "add" ? <Create onHandleSubmit={appendCard} setPage={setActivePage}/> 
      : <Profile/>} 
     
     <Nav setPage={setActivePage} page={activePage}/>
    </div>
  );
}

export default App;