import React from 'react';

class App extends React.Component {
  // Write the constructor below
  constructor(props) {
    super(props);
    // Define the state
    this.state = {name: 'Ken the Ninja'}
    
  }
  
  render() {
    return (
    	<div>
    	  <h1>Hello, Ken the Ninja!</h1>
        <button onClick={() => {console.log('Master Wooly')}}>Master Wooly</button>
        <button onClick={() => {console.log('Ken the Ninja')}}>Ken the Ninja</button>
      </div>
    );
  }
}

export default App;
