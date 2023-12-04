import { Route, Routes } from 'react-router-dom';
import './assets/styles/layout.scss';
import './App.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home active={false} />}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
