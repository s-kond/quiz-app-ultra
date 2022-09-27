import './App.css';
import Header from './components/header/Header';
import Nav from './components/navigation/Navigation';
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
     <Header/>
     <div className="card-container">
        <Card question="Are penguins able to fly?" answer="Unfortunately not" tag="penguins" bookmarked={false}/>
        <Card question="What do penguins like the most?" answer="Fish" tag="penguins" bookmarked={true}/>
        <Card question="Do penguins live north or south of the equator?" answer="South" tag="penguins" bookmarked={false}/>
     
     </div>
     <Nav/>
    </div>
  );
}

export default App;
