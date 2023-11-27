import {useState, useEffect} from 'react';

function CatFact() {
    const [fact, setFact] = useState("");

    useEffect(() => {
        getCatFact();
    }, []);

    const getCatFact = async () => {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        setFact(data.fact);
    }

    return ( <>
        <h1>Cat Fact</h1>
        <p>{fact}</p>
    </> );
}

export default CatFact;