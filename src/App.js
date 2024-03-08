import './App.css';

import React, { Component } from 'react';
import CustomNavbar from './components/CustomNavbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  pageSize = 6
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <CustomNavbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/business" element={<News key='business' setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/" element={<News key='general' setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/entertainment" element={<News key='entertainment' setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News key='general' setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<News key='health' setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News key='science' setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News key='sports' setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News key='technology' setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
