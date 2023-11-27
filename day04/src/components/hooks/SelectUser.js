import { useState } from 'react';
import UserData from './UserData';

function SelectUser () {
    const [userName, setUserName] = useState('');
  
    const selectUser = (event) => {
      setUserName(event.target.innerText);
    }
  
    return (
      <div>
        <h1>Choose user</h1>
        <button onClick={(event) => selectUser(event)}>Bob</button>
        <button onClick={(event) => selectUser(event)}>Tom</button>
        <button onClick={(event) => selectUser(event)}>Jon</button>
        <UserData userName={userName}></UserData>
      </div>
    );
}

export default SelectUser;