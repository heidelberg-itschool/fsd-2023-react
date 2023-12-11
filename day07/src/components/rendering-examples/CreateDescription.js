import { useState } from "react";
import Description from "./Description";

function CreateDescription() {
    const [label,setLabel] = useState('');
    const [text,setText] = useState('');
    const [submit, setSubmit] = useState(false);

    return ( <>
        <h1>Create Description</h1> 
        <label>Label:</label>
        <input value={label} onChange={(e) => setLabel(e.target.value)}/>
        <label>Text:</label>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={() => setSubmit(true)}>Submit</button>
        <Description label={label} text={text} submit={submit}/>
    </>);
}

export default CreateDescription;