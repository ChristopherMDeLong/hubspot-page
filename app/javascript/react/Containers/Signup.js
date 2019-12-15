import React, { Component } from 'react';
import Product from '../components/Product';
import TextField from '../components/TextField';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      company: '',
      productOptions: ['sales hub', 'marketing hub', 'service hub'],
      productSelected: '',
      errors: {}
    }
    this.handleProductSelection = this.handleProductSelection.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.validateNameChange = this.validateNameChange.bind(this);
    this.validateEmailChange = this.validateEmailChange.bind(this);
  }

  handleProductSelection(event) {
    this.setState({ productSelected: event.target.value })
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      name: '',
      email: '',
      company: '',
      productSelected: ''
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (
      this.validateNameChange(this.state.name) &&
      this.validateEmailChange(this.state.email)
    ) {
      let formPayload = {
        name: this.state.name,
        email: this.state.email,
        company: this.state.company,
        productSelected: this.state.productSelected
        };
        this.props.trackConsumption(formPayload);
        this.handleClearForm(event);
      }
    }

    handleNameChange(event) {
      this.validateNameChange(event.target.value)
      this.setState({ name: event.target.value })
    }

    handleEmailChange(event) {
      this.validateEmailChange(event.target.value)
      this.setState({ email: event.target.value })
    }

    handleCompanyChange(event) {
      this.setState({ company: event.target.value })
    }

    validateNameChange(selection) {
      if (selection.trim() === '') {
        let newError = { name: 'You must enter your name.' }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
        return false
      } else {
        let errorState = this.state.errors
        delete errorState.name
        this.setState({ errors: errorState })
        return true
      }
    }

    validateEmailChange(selection) {
      if (selection.trim() === '') {
        let newError = { email: 'You must enter your email.' }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
        return false
      } else {
        let errorState = this.state.errors
        delete errorState.email
        this.setState({ errors: errorState })
        return true
      }
    }
    render() {
      let errorDiv;
      let errorItems;
      if (Object.keys(this.state.errors).length > 0) {
        errorItems = Object.values(this.state.errors).map(error => {
          return(<li key={error}>{error}</li>)
        })
        errorDiv = <div className="callout alert">{errorItems}</div>
      }
  return (
    <div>
      <form className="form" onSubmit={this.handleFormSubmit}>
        {errorDiv}
          <label>Name</label>
          <TextField
            type="text"
            name="name"
            handlerFunction={this.handleNameChange}
          />
          <label>Email</label>
          <TextField
            type="text"
            name="email"
            handlerFunction={this.handleEmailChange}
          />
          <label>Company</label>
          <TextField
            type="text"
            name="company"
            handlerFunction={this.handleCompanyChange}
          />
          <label>Product Selected</label>
          <Product
            name="product"
            options={this.state.productOptions}
            selectedOption={this.state.productSelected}
            handlerFunction={this.handleProductSelection}
          />
          <button>Sign Up</button>
      </form>
    </div>
  )
}
}
export default Signup;
