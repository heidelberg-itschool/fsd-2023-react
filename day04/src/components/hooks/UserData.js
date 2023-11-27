import { useEffect, useState } from 'react';

function UserData({userName}) {

    const [user, setUser] = useState();

    useEffect(() => {
        if (userName) 
            fetchUserData(userName);
    }, [userName]);

    // useEffect(() => { // this will render every time a prop or a state is updated and will go in a loop
    //  fetchUserData(userName);
    //}) 

    const fetchUserData = async(name) => {
        const result = await fetch(`https://api.agify.io/?name=${name}`);
        const data = await result.json();
        setUser({...data});
    }
  
    return (
    <> 
    {
        user && 
        <>
            <h1>User Data:</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </>
    }
    </>
    );
}

export default UserData;