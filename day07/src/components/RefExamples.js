import { useRef } from 'react';

function RefExamples() {
    const count = useRef(5);
    const inputRef = useRef();
    const divRef = useRef();

    function increment() {
        count.current++;
        console.log(count);
    }

    function focus() {
        console.log(inputRef);
        inputRef.current.focus();
    }

    return ( <>
        <p>Ref value {count.current}</p>
        <button onClick={increment}>Increment</button>
        <input ref={inputRef} />
        <button onClick={focus}>Focus</button>
        <div ref={divRef}>
            <p>Here we will change the color</p>
            <button onClick={() => divRef.current.style.backgroundColor = 'lightblue'}>Change color</button>
        </div>
    </> );
}

export default RefExamples;