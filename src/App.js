import React from 'react';

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};

    // Option 1: enable this and disable option 2
    // this.addMore = this.addMore.bind(this);
  }

  // Option 2: disable Option 1 and enable below code
  // arrow function take care of binding
  addMore = () => {
    console.log(this)
    this.setState({
      count: this.state.count + 1
    });
  }


  // Option 1: enable this and disable Option 2
  // addMore() {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // }

  render() {
    return(
      <div className="app-component">
        <h2>hello react!! {this.props.name}
         / {this.props.email}</h2>
         {console.log(this)}
        <div>
          <p>Count: {this.state.count}</p>
          <p><button onClick={this.addMore}>{this.state.count}</button></p>
        </div>
      </div>
	  );
  }
}

export default App;
