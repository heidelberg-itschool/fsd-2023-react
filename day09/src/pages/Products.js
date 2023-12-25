import {useEffect, useState} from 'react';
import Cocktail from '../components/Cocktail/Cocktail.js';

function Products() {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        getAllCocktails();
    }, []);

    const getAllCocktails = async() => {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink');
        const data = await response.json();
        setDrinks(data.drinks);
    }

    return ( 
    <>
        <h1>All cocktails:</h1>
        {drinks.map((drink) => <Cocktail key={drink.idDrink} cocktail={drink}/>)}
    </> );
}

export default Products;