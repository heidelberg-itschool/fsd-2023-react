import { useReducer, useState } from "react";

function Counter ()  {
    // const [count, setCount] = useState(0);
    const [count, setCount] = useReducer(reducer, 5);
    
    function reducer(state, action) {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return 0;
            default:
                return state;
        } 
    }

    return <>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount('increment')}>Increment</button>
        <button onClick={() => setCount('decrement')}>Decrement</button>
        <button onClick={() => setCount('reset')}>Decrement</button>
    </>
}

export default Counter;