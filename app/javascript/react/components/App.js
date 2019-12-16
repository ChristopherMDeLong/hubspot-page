import React, { Component } from 'react';
import Signup from '../Containers/Signup';
import Intro from '../components/Intro';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }

  render(){
  return (
    <div className= "row">
      <div className="column-one">
        <img src={require("../../../assets/images/computer.jpeg")} />
      </div>
      <div className="column-two">
        <Intro />
      </div>
      <div className="column-three">
            <Signup />
      </div>
    </div>
  );
}
}

export default App;
