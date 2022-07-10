import logo from './logo.svg';
import './App.css';
import Pallets from './components/Pallets';
//import MyComponent from './components/take';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http:3001/localhost/pallets/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Pallets/>
      </header>
    </div>
  );
}

export default App;
