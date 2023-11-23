import './App.css';
import Clock from './components/lifecycle-methods/Clock';
import SelectUser from './components/lifecycle-methods/SelectUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Clock></Clock>
       <SelectUser></SelectUser>
      </header>
    </div>
  );
}

export default App;
