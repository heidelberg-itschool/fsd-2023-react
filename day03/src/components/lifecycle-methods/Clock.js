import { Component } from 'react';

class Clock extends Component {
    state = {date: new Date()};
  
    componentDidMount() {
      console.log("loading component");
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentDidUpdate() {
      console.log("update");
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({date: new Date()});
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
}

export default Clock;