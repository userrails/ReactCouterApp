import React from 'react';

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  increment() {
    console.log(this)
    // this.setState({count: this.state.count + 1});
  }

  render() {
    return(
      <div className="app-component">
        <h2>hello react!! {this.props.name}
         / {this.props.email}</h2>
         {console.log(this)}
        <div>
          <p>Count: {this.state.count}</p>
          <p><button onClick={this.increment}>Click!</button></p>
        </div>
      </div>
	  );
  }
}

export default App;
