import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }
  handleChange(event) {
    this.setState({name: event.target.value});
  }
  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <label>
          이름:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          주소:
          <input type="text" value={this.state.address} onChange={this.handleAddressChange} />
        </label>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Child name={this.state.name} address={this.state.address} />
      </div>
    );
  }
}

export default App;
