import './Cocktail.scss'

function Cocktail({cocktail}) {
    console.log(cocktail);
    return ( 
        <div className="cocktail">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
            <p>{cocktail.strDrink}</p>
            <button className='btn btn-secondary'>View cocktail</button>
            <button className='btn btn-primary'>Add to card</button>
        </div>
    );
}

export default Cocktail;