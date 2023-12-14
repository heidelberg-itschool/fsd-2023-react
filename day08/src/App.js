import { useState } from 'react';
import './App.css';
import UserContext from './context/UserContext';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <Login/>
        <Home/>
        <Products/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
