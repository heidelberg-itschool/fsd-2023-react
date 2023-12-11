import { useState } from 'react';
import Child from './Child';

function Parent() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    function increment() {
        setCount(count + 1);
    }
    function addProduct() {
        // const newProducts = products; // this sends the same reference and will not update the child props
        // newProducts.push('jacket');
        // setProducts(newProducts)
        setProducts([...products, 'jacket']);
    }

    console.log('render parent');

    return ( <>
        <p>Count is: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={addProduct}>Add product</button>
        <Child products={products} />
    </> );
}

export default Parent;