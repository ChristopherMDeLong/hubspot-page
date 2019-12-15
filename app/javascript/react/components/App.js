import React, { Component } from 'react';
import Signup from '../Containers/Signup';
import ContactList from '../components/ContactList';
import Intro from '../components/Intro';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
    this.trackConsumption = this.trackConsumption.bind(this);
  }

  trackConsumption(submission) {
  let allContacts = this.state.contacts
  this.setState({ contacts: allContacts.concat(submission) })
}
  render(){
  return (
    <div className= "row">
      <div className="column-one">
        <img src={require("../../../assets/images/fork.jpeg")} />
      </div>
      <div className="column-two">
        <Intro />
      </div>
      <div className="column-three">
            <Signup trackConsumption={this.trackConsumption} />
            <ContactList contacts={this.state.contacts} />
      </div>
    </div>
  );
}
}

export default App;
