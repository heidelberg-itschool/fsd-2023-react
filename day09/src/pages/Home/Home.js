import cocktails from '../../assets/images/cocktails.avif';
import { Link } from 'react-router-dom';
import './Home.scss'

function Home() {
    return ( 
    <div id='home'>
        <div className='container'>
            <img id='cocktails' src={cocktails} alt="cocktails" />
            <div className='content'>
                <h1>We have the best cocktails</h1>
                <Link className='btn btn-secondary' to='/products'>Choose your favorite</Link>
            </div>
        </div>

    </div>);
}

export default Home;