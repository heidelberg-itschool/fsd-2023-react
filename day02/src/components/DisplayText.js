import { Component } from 'react';

class DisplayText extends Component {
    state = { display: true };

    toggleText = () => {
        this.setState({display: !this.state.display});
    }

    render() { 
        return (<>
            <button onClick={this.toggleText}>Toggle text</button>
            {this.state.display && <p>This is the text</p>}
        </>);
    }
}
 
export default DisplayText;