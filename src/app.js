import React, { Component } from 'react'
import NavBar from './components/nav-bar';

export default class App extends Component {
  render() {
      // <NavBar/>
    return (
        <div>
            {this.props.children}
        </div>

    );
  }
}
