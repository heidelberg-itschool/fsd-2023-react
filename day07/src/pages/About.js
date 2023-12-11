import { Link } from "react-router-dom";

function About() {
    return ( <>
        <h1>About page</h1>
        <Link to='/home'>Go to Home</Link>
    </> );
}

export default About;