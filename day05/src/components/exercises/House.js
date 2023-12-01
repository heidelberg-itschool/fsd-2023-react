import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function House() {
    const [house, setHouse] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getHouseData();
    }, []);

    const getHouseData = async () => {
        const response = await fetch(`https://wizard-world-api.herokuapp.com/Houses/${id}`);
        const data = await response.json();
        setHouse(data);
    }

    function goToHouses() {
        navigate('/houses');
    }

    return ( <>
        <h1>You have selected house: {house.name}</h1>
        <p>House colors: {house.houseColours}</p>
        <p>Element: {house.element}</p>
        <button onClick={goToHouses}>Go back to houses</button>
    </> );
}

export default House;