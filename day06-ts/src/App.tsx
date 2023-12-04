import './App.css';
import Home from './components/Home';

function App() {
  const user = {name: 'Jon', surname: 'Doe'};
  return (
    <div className="App">
      <header className="App-header">
       <Home user={{...user, age: 20}} />
       {/* <Home user={user} />  // this will not work, age is missing */}
       <Home user={{...user, age: 25, email: 'test@test.com'}} />
      </header>
    </div>
  );
}

export default App;
