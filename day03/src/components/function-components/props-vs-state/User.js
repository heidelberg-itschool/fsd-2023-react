import { useState } from "react";
import Edit from "./Edit";

function User() {
    const [name, setName] = useState('Jon');
    return ( <>
        <h1>User name: {name}</h1>
        <Edit name={name} setName={setName}></Edit>
        <button onClick={() => setName('Mr. Jon')}>Change name to Mr. Jon</button>
    </> );
}

export default User;