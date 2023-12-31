import './App.scss';
import { Route, Routes } from 'react-router-dom';
import {Home, Products, Product, Card, NotFound} from './pages';
import Main from './layout/Main';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route element={<Main/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/product/:id' element={<Product/>} />
            <Route path='/card' element={<Card/>} />
            <Route path='*' element={<NotFound/>} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
