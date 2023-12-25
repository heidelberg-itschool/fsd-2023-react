import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Card from './pages/Card';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/card' element={<Card/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
