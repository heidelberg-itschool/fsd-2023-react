import { Link } from 'react-router-dom';
import './Home.scss';
import groupClasses from '../../utils/groupClasses';

function Home({active}) {
    const paragraphStyle = ['paragraph', 'large', active && 'active-paragraph'].join(" ");

    return ( <div id="home">
        <h1 id='home-title'>Home</h1>
        <p>This is home page</p>

        <p className={`paragraph ${active ? 'active-paragraph' : ''}`}>This is styled paragraph</p>
        <p className={paragraphStyle}>This is styled paragraph</p>
        <p className={groupClasses('paragraph', 'large', active && 'active-paragraph')}>This is styled paragraph</p>

        <Link to='/about'>Go to About</Link>
    </div> );
}

export default Home;