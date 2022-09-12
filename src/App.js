import React, { Component } from 'react';
import './styles/Appstyle.css';
import { PersonInfo, PersonInfoEdit } from './components/PersonInfo.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        name: 'John Doe',
        title: 'Designer',
        phone: '860-555-5555',
        email: 'John.doe@example.com',
      },
    };
  }

  render() {
    const {info} = this.state;
    return (
      <div>
        <h1></h1>
        <PersonInfo
          info={info}
        />
        <PersonInfoEdit />
      </div>
    );
  }
}

export default App;
