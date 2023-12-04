import { Link } from 'react-router-dom';
import './About.css';

function About() {
    const space = '50px 70px';
    const pStyle = {color: 'lightgreen', margin: space, padding: space};
    return ( <>
        <h1 style={{color: 'lightblue', backgroundColor: 'blue'}}>About</h1>
        <p style={pStyle}>This is about page</p>
        <Link to='/'>Go to Home</Link>
    </> );
}

export default About;