const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

const getAllCocktails = async() => {
    const response = await fetch(`${baseUrl}/filter.php?c=Ordinary_Drink`);
    const data = await response.json();
    return data.drinks;
}

const getCocktailBy = async (id) => {
    const response = await fetch(`${baseUrl}/lookup.php?i=${id}`);
    const data = await response.json();
    return data.drinks[0];
}

const CocktailService = {
    getAllCocktails,
    getCocktailBy
}

export default CocktailService;