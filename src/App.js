import React from 'react';
import './App.css';
import Pets from './component/pets'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let petsHtml = <Pets/>
    return (petsHtml)
  }
}
 
export default App;
