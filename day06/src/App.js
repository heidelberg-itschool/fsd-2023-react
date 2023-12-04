import { Route, Routes } from 'react-router-dom';
import './assets/styles/layout.scss';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';
import Dashboard2 from './pages/Dashboard/Dashboard2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home active={false} />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/dashboard2' element={<Dashboard2/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
