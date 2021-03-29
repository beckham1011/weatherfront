import React, { Component } from 'react';
import './App.css';
import Weather from './component/weather'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let weatherHtml = <Weather/>
    return (weatherHtml)
  }
}
 
export default App;