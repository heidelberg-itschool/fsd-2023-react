import { useState } from "react";

function Counter ()  {
    const [count, setCount] = useState(0);

    function decrement () {
        setCount(count ? count - 1 : 0);
    }
    
    return <>
        <h3>Counter: <span data-testid='counter'>{count}</span></h3>
        <button data-testid='increment' onClick={() => setCount(count + 1)}>Increment</button>
        <button data-testid='decrement' onClick={decrement}>Decrement</button>
        <button data-testid='reset' onClick={() => setCount(0)}>Reset</button>
    </>
}

export default Counter;