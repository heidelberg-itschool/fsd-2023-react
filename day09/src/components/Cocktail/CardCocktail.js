import './Cocktail.scss'

function CardCocktail({cocktail}) {
    return ( 
        <div className="cocktail">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
            <h3>{cocktail.strDrink}</h3>
            <p>Quantity: <span data-cy="quantity">{cocktail.quantity}</span></p>
        </div>
    );
}

export default CardCocktail;