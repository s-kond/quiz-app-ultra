import './App.css';
import Header from './components/header/Header';
import Nav from './components/navigation/Navigation';
import Card from './components/card/Card';

const cards = [
  {id: 101, question: "Are penguins able to fly?", answer: "Unfortunately not", tags: ["penguins", "sea"]},
  {id: 102, question: "What do penguins like the most?", answer:"Fish", tags: ["penguins", "yolo", "fish"]},
  {id: 102, question: "Do penguins live north or south of the equator?", answer:"South", tags: ["penguins", "equator"]}
]

function App() {
  return (
    <div className="App">
     <Header/>
     <div className="card-container">
        {cards.map(card => {
          return <Card id={card.id} question={card.question} answer={card.answer} tags={card.tags} />
        })}
     </div>
     <Nav/>
    </div>
  );
}

export default App;