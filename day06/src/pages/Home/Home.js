import { Link } from 'react-router-dom';
import './Home.scss';
import groupClasses from '../../utils/groupClasses';
import welcomeImg from './../../assets/images/welcome.jpeg';

function Home({active}) {
    const paragraphStyle = ['paragraph', 'large', active && 'active-paragraph'].join(" ");

    return ( <div id="home">
        <h1 id='home-title'>Home</h1>
        <p>This is home page</p>

        <p className={`paragraph ${active ? 'active-paragraph' : ''}`}>This is styled paragraph</p>
        <p className={paragraphStyle}>This is styled paragraph</p>
        <p className={groupClasses('paragraph', 'large', active && 'active-paragraph')}>This is styled paragraph</p>

        <img style={{width: '300px'}}
         src='https://t3.ftcdn.net/jpg/05/23/04/00/360_F_523040057_JYMTxoQGquklUthNLLjspI7ldR1hrFlH.jpg'
          alt='welcome' />
        <img style={{width: '300px'}} src={welcomeImg} alt='welcome2' />

        <Link to='/about'>Go to About</Link>
    </div> );
}

export default Home;