import { Component } from 'react';

class DisplayText extends Component {
    state = { display: true };

    toggleText = () => {
        this.setState({display: !this.state.display});
        // this is an async function
        console.log(this.state);
    }

    render() { 
        return (<>
            <button onClick={this.toggleText}>Toggle text</button>
            {this.state.display && <p>This is the text</p>}
        </>);
    }
}
 
export default DisplayText;