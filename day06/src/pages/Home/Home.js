import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
    return ( <div id="home">
        <h1 id='home-title'>Home</h1>
        <p>This is home page</p>
        <Link to='/about'>Go to About</Link>
    </div> );
}

export default Home;