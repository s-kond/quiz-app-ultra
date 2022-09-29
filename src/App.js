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

  return (
    <div className="App">
     <Header/>
    {activePage === "home" ? <Cards cards={cardArray}/> 
      : activePage === "bookmark" ? <Cards cards={cardArray} page={activePage}/> 
      : activePage === "add" ? <Create onHandleSubmit={appendCard} setPage={setActivePage}/> 
      : <Profile/>} 
     
     <Nav setPage={setActivePage} page={activePage}/>
    </div>
  );
}

export default App;