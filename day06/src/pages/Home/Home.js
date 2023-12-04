import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return ( <>
        <h1 id='home-title'>Home</h1>
        <p>This is home page</p>
        <Link to='/about'>Go to About</Link>
    </> );
}

export default Home;