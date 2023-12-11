import React, { Suspense, useState } from 'react';
import Loading from '../components/Loading.js';
// import UserData from '../components/UserData';
const UserData = React.lazy(() => import('./../components/UserData.js'));

function Home() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState('');

    function logIn() {
        setLoggedIn(true);
    }
    return ( <>
        <h1>Home page</h1>
        <input value={user} onChange={(event) => setUser(event.target.value)}/>
        <button onClick={logIn}>Log In user</button>
        {loggedIn && 
            <Suspense fallback={<Loading/>}>
                <UserData user={user} />
            </Suspense>
        }
    </>);
}

export default Home;