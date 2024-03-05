import './App.css';

import React, { Component } from 'react'
import CustomNavbar from './components/CustomNavbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <CustomNavbar />
        <News/>
      </div>
    )
  }
}
