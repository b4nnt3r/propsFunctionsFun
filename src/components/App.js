import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './Baselayout';
import ParentComponent from './Parentcomponent';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout />
        <ParentComponent />
        <Footer/>

      </div>
    );
  }
}

export default App;
