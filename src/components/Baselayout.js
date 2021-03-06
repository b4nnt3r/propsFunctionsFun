import React, {Component} from 'react';
import Header from './Header';

class BaseLayout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <div className="row justify-content-center">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default BaseLayout;
