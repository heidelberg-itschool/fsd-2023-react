import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Houses() {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        getHouses();
    }, []);
    
    const getHouses = async () => {
        const response = await fetch('https://wizard-world-api.herokuapp.com/Houses');
        const data = await response.json();
        setHouses(data);
    }

    return ( <>
        <h1>Harry Potter Houses:</h1>
        {houses.map((house) => 
            <p key={house.id}>
                <Link to={`/house/${house.id}`}>{house.name}</Link>
            </p>
        )}
    </> );
}

export default Houses;