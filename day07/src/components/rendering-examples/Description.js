import React from "react";

function Description({label, text, submit}) {
    console.log('re-render');
    return ( <>
        <h2>Output Description:</h2>
        <p>Label: {label}</p>
        <p>Text: {text}</p>
    </> );
}

function areEquals(prevProps, newProps){
    return !newProps.submit;
}

export default React.memo(Description, areEquals);