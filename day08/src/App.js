import { useState } from 'react';
import './App.css';
import UserContext from './context/UserContext';
import {Home, Login, Product, Products, NotFound, ToDo, Counter} from './pages';
import { Routes, Route } from 'react-router-dom';
import RouterRedirect from './layout/RouterRedirect';
import Main from './layout/Main';

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <Routes>
          <Route path='/' element={<Main/>} >

            <Route path='/' element={<RouterRedirect/> }>
            <Route path='/' element={<Home/>} />
              <Route path='/products' element={<Products/>} />
              <Route path='/product' element={<Product/>} />
            </Route>

            <Route path='/login' element={<Login/>} />
            <Route path='/todo' element={<ToDo/>} />
            <Route path='/counter' element={<Counter/>} />
            <Route path='*' element={<NotFound/>} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
