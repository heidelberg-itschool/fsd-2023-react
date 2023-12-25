import {useEffect, useState} from 'react';
import Cocktail from '../components/Cocktail/Cocktail.js';
import CocktailService from '../services/cocktail.js';

function Products() {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        getAllCocktails()
    }, []);

    const getAllCocktails = async() => {
        const drinks = await CocktailService.getAllCocktails();
        setDrinks(drinks);
    }

    return ( 
    <>
        <h1>All cocktails:</h1>
        {drinks.map((drink) => <Cocktail key={drink.idDrink} cocktail={drink} viewCocktail/>)}
    </> );
}

export default Products;