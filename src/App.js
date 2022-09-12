import React, { Component } from 'react';
import './styles/Appstyle.css';
import {PersonInfo, PersonInfoEdit} from './components/PersonInfo.js';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1></h1>
        <PersonInfo info={{ name: 'John Doe', title: "Designer", phone: "860-555-5555", email: "John.doe@example.com" }} />
        <PersonInfoEdit />
      </div>
    );
  }
}

export default App;
