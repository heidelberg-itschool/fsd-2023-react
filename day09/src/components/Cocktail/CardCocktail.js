import './Cocktail.scss'

function CardCocktail({cocktail}) {
    return ( 
        <div className="cocktail">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
            <h3>{cocktail.strDrink}</h3>
            <p>Quantity: {cocktail.quantity}</p>
        </div>
    );
}

export default CardCocktail;