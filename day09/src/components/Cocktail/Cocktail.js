import { Link } from 'react-router-dom';
import './Cocktail.scss'

function Cocktail({cocktail, viewCocktail}) {

    return ( 
        <div className="cocktail">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
            <h3>{cocktail.strDrink}</h3>
            {cocktail.strInstructions && <p>{cocktail.strInstructions}</p>}
            {viewCocktail && <Link to={`/product/${cocktail.idDrink}`} className='btn btn-secondary'>View cocktail</Link>}
            <button className='btn btn-primary'>Add to card</button>
        </div>
    );
}

export default Cocktail;