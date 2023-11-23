import { Component } from 'react';
import UserData from './UserData';

class SelectUser extends Component {
    state = {userName: ''};
  
    selectUser = (event) => {
      console.log(event);
      this.setState({userName: event.target.innerText});
    }
  
    render() {
      return (
        <div>
          <h1>Choose user</h1>
          <button onClick={(event) => this.selectUser(event)}>Bob</button>
          <button onClick={(event) => this.selectUser(event)}>Tom</button>
          <button onClick={(event) => this.selectUser(event)}>Jon</button>
          <UserData userName={this.state.userName}></UserData>
        </div>
      );
    }
}

export default SelectUser;