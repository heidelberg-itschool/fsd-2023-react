import { useMemo, useState } from 'react';

function Products() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [search, setSearch] = useState('');
    const products = ['dress', 'jacket', 'jeans', 'boots', 'skirt'];

    function filterProducts() {
        console.log('filter'); // will re-render always
        return products.filter(product => product.includes(search));
    }

    const filterProductsMemo = useMemo(() => {
        console.log('filter 2');
        return products.filter(product => product.includes(search));
    }, [search]);

    return (<>
        {!loggedIn && <>
            <p>Please log in</p>
            <button onClick={() => setLoggedIn(true)}>log in</button>
        </>}
        <>
            <p>Filter products</p>
            <label>Search</label>
            <input value={search} onChange={(e) => setSearch(e.target.value)}/>
            {filterProducts().map((product, index) => <p key={index}>{product}</p>)}
            <h3>Memorized</h3>
            {filterProductsMemo.map((product, index) => <p key={index}>{product}</p>)}
        </>
    </>);
}

export default Products;