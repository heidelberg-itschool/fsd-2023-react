import { Route, Routes } from 'react-router-dom';
import './assets/styles/layout.scss';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home active={false} />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
