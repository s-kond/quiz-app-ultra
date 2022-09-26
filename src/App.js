import './App.css';
import Header from './components/header/Header';
import Nav from './components/navigation/Navigation';
import Cards from './components/card/Card';

function App() {
  return (
    <div className="App">
     <Header/>
     <Cards/>
     <Nav/>
    </div>
  );
}

export default App;
