import './App.css';
import Exercise3 from './components/exercises/Exercise3';
import CatFact from './components/hooks/CatFact';
import SelectUser from './components/hooks/SelectUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Exercise3></Exercise3>
        <CatFact></CatFact>
        <SelectUser></SelectUser>
      </header>
    </div>
  );
}

export default App;
