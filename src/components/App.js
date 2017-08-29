import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './Baselayout';
import ParentComponent from './Parentcomponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout />
        <ParentComponent />
      </div>
    );
  }
}

export default App;
