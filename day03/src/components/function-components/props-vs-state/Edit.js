import { useState } from "react";

function Edit({name, setName}) {

    const [childName, setChildName] = useState(name); // this is an anti-pattern

    return ( <input value={childName} onChange={(event) => setChildName(event.target.value)} /> );
}

export default Edit;