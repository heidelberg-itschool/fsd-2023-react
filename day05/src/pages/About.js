import { useLocation } from "react-router-dom";

function About() {
    const location = useLocation();
    console.log(location);
    
    return ( <h1>About page</h1> );
}

export default About;