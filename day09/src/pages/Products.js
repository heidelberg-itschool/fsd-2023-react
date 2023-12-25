import {useEffect} from 'react';
import Cocktail from '../components/Cocktail/Cocktail.js';
import CocktailService from '../services/cocktail.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../store/cocktailsSlice.js';

function Products() {
    const drinks = useSelector(state => state.cocktails);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!drinks.length)
            getAllCocktails()
    }, []);

    const getAllCocktails = async() => {
        const drinks = await CocktailService.getAllCocktails();
        dispatch(getAll(drinks));
    }

    return ( 
    <>
        <h1>All cocktails:</h1>
        {drinks.map((drink) => <Cocktail key={drink.idDrink} cocktail={drink} viewCocktail/>)}
    </> );
}

export default Products;