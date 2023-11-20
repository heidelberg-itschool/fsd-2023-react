function Counter() {
    let counter = 0;

    function increment() {
        counter = counter + 1;
        // does not update the state
    }

    return ( <>
        <h3>This is your current counter: {counter}</h3> 
        <button onClick={increment}>Increment</button>
    </>);
}

export default Counter;