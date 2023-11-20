import React from 'react';

class Loading extends React.Component {
    loading = this.props.loading;

    renderCorrectData() {
      // this.props = {loading: true};
      // can't update props
      return this.loading ? <h3>Spinner</h3> : <h3>This is your data</h3>;
    }

    render() {
        return <div>
            <h1>Class Component</h1>
            {this.renderCorrectData()}
        </div>
    }
}

export default Loading;