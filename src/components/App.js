import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './Baselayout';
import ChildComponent from './Childcomponent';
import DisplayComponent from './Displaycomponent';
import Footer from './Footer';
import Header from './Header';
import ParentComponent from './Parentcomponent';

<div>
  <Header />
  <ChildComponent />
  <DisplayComponent />
  <Footer />
  <ParentComponent />
</div>

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout></BaseLayout>
        <Header />
        <ParentComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
