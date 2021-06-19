import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Define the state
    this.state = {count: 0};
  }
  
  render() {
    return (
      <div>
        <h1>
          {this.state.count}
          
          
        </h1>
        {<button>+</button>}
        
        
      </div>
    );
  }
}

export default App;
