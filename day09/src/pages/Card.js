import { useSelector } from "react-redux";
import CardCocktail from "../components/Cocktail/CardCocktail";

function Card() {
    const products = useSelector(state => state.card);
    return ( 
    <>
        <h1>Your Card</h1>
        {products.map(product => <CardCocktail key={product.idDrink} cocktail={product} />)}
    </> );
}

export default Card;