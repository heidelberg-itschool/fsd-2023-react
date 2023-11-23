import './App.css';
import Counter from './components/function-components/Counter';
import Clock from './components/lifecycle-methods/Clock';
import SelectUser from './components/lifecycle-methods/SelectUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Clock></Clock>
       <SelectUser></SelectUser>
       <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
