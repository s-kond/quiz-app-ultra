import './App.css';
import Header from './components/header/Header';
import Nav from './components/navigation/Navigation';
import Cards from './pages/Cards';
import Create from './pages/Create/Create';
import Profile from './pages/Profile/Profile';
import { useState } from 'react';

const cards = [
  {id: 101, question: "Are penguins able to fly?", answer: "Unfortunately not", tags: ["penguins", "sea"], bookmarked: true},
  {id: 102, question: "What do penguins like the most?", answer:"Fish", tags: ["penguins", "yolo", "fish"], bookmarked: false},
  {id: 102, question: "Do penguins live north or south of the equator?", answer:"South", tags: ["penguins", "equator"], bookmarked: true}
]

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="App">
     <Header/>
    {activePage === "home" ? <Cards cards={cards}/> 
      : activePage === "bookmark" ? <Cards cards={cards} page={activePage}/> 
      : activePage === "add" ? <Create/> 
      : <Profile/>} 
     
     <Nav setPage={setActivePage} page={activePage}/>
    </div>
  );
}

export default App;