import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading';
// import Home from './pages/Home';
// import About from './pages/About';
const Home = lazy(() => import('./pages/Home.js'));
const About = lazy(() => import('./pages/About.js'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </Suspense>
      </header>
    </div>
  );
}

export default App;
