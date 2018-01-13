import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiMessage: 'Loading...',
    };
  }

  componentWillMount() {
    // Quick and dirty!
    if (process.env.NODE_ENV === 'test') return;

    const url = process.env.NODE_ENV === 'development' ?
      'http://localhost:8080/test' :
      'http://localhost/api/test';

    fetch(url)
      .then(response => (
        response.json()
      ))
      .then((response) => {
        this.setState({ apiMessage: response.message });
      })
      .catch(() => {
        this.setState({ apiMessage: 'Could not get API message!' });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Message from the API: {this.state.apiMessage}
        </p>
      </div>
    );
  }
}

export default App;
