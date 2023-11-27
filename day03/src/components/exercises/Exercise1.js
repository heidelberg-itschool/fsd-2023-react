import {useState} from "react";

function Exercise1() {

    const [characterCounter, setCharacterCounter] = useState(0);
    const [wordCounter, setWordCounter] = useState(0);
    const [text, displayText] = useState('');

    const setText = (value) => {
        displayText(value);
        setWordCounter(value.split(' ').length);
        setCharacterCounter(value.length);
    }

    const reset = () => {
        displayText("");
        setWordCounter(0);
        setCharacterCounter(0);
    }

    return <>
        <textarea value={text} onChange={(event) => setText(event.target.value)}/>
        <p>{text}</p>
        <p>Character counter: {characterCounter}</p>
        <p>Word Counter: {wordCounter}</p>
        <button onClick={reset}>Reset</button>
    </>
}

export default Exercise1;