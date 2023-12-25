import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CocktailService from '../services/cocktail';
import Cocktail from '../components/Cocktail/Cocktail';

function Product() {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState({});

    useEffect(() => {
        getCocktail();
    }, []);

    const getCocktail = async () => {
        const drink = await CocktailService.getCocktailBy(id);
        setCocktail(drink);
    }
    return ( <>
        <h1>Selected cocktail</h1>
        <Cocktail cocktail={cocktail}/>
    </>);
}

export default Product;