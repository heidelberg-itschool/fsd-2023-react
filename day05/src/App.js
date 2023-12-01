import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/exercises/Form';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Layout from './layouts/Layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/form' element={<Form/>} />
            <Route path='*' element={<NotFound/>} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
