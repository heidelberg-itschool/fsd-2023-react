import { Component } from 'react';

class UserData extends Component {

    state = {user: {}}

    componentDidUpdate = (prevProps, prevState) => {
        console.log(prevProps.userName);
        console.log(this.props.userName);

        if (this.props.userName !== prevProps.userName)
            this.fetchUserData(this.props.userName);
    }    

    async fetchUserData(name) {
        const result = await fetch(`https://api.agify.io/?name=${name}`);
        const data = await result.json();
        console.log(data);
        this.setState({user: {...data}});
    }
  
    render() {
      return (
        <> 
        {
            this.state.user.name && 
            <>
                <h1>User Data:</h1>
                <p>Name: {this.state.user.name}</p>
                <p>Age: {this.state.user.age}</p>
            </>
        }
        </>
      );
    }
}

export default UserData;