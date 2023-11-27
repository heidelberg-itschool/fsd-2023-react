import { useState } from "react";

function Edit({name, setName}) {

    const [childName, setChildName] = useState(name); // this is an anti-pattern

    function editValue(value) {
        //setChildName(value);
        setName(value);
    }

    return ( <input value={name} onChange={(event) => editValue(event.target.value)} /> );
}

export default Edit;