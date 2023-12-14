import { useState } from 'react';
import './App.css';
import UserContext from './context/UserContext';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
