import './App.css';
import Header from './components/header/Header';
import {NavBar} from './components/navigation/Navigation';
import {Home} from './pages/Home';
import {Bookmarks} from './pages/Bookmarks';
import {Create} from './pages/Create';
import {Profile} from './pages/Profile';
import {Routes, Route} from "react-router-dom";
import { setLocalStorage, loadLocalStorage } from './lib/localStorage';
import {nanoid} from "nanoid";
import { useEffect, useState } from 'react';

const cards = [
  {id: nanoid(), question: "Are penguins able to fly?", answer: "Unfortunately not", tags: ["penguins", "birds"], bookmarked: true},
  {id: nanoid(), question: "What do penguins like the most?", answer:"Fish", tags: ["penguins", "food"], bookmarked: false},
  {id: nanoid(), question: "Do penguins live north or south of the equator?", answer:"South", tags: ["penguins"], bookmarked: true}
]

function App() {
  const [cardArray, setCards] = useState(loadLocalStorage("cardArray") ?? cards);

  useEffect(() => {
    setLocalStorage("cardArray", cardArray);
  }, [cardArray])

  function appendCard(newQuestion, newAnswer, newTags){
    setCards([...cardArray, {id: nanoid(), question: newQuestion, answer: newAnswer, tags: newTags, bookmarked: false}])
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
      <Routes>
        <Route path='/' element={<Home cards={cardArray} onDelete={deleteCard} onToggle={toggleBookmark} />}/>
        <Route path='/bookmarks' element={<Bookmarks cards={cardArray} onDelete={deleteCard} onToggle={toggleBookmark} />}/>
        <Route path='/create' element={<Create onHandleSubmit={appendCard}/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/*" element={<h1>Diese Seite existiert leider nicht.</h1>}/>
      </Routes>
     <NavBar/>
    </div>
  );
}

export default App;