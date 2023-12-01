import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/exercises/Form';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Layout from './layouts/Layout';
import Product from './pages/Product';
import Houses from './components/exercises/Houses';
import House from './components/exercises/House';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/product/:id' element={<Product/>} />
          <Route path='/category/:categoryId/product/:productId?' element={<Product/>} />
          <Route path='/form' element={<Form/>} />
          <Route path='/houses' element={<Houses/>} />
          <Route path='/house/:id' element={<House/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
