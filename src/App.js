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
        isSubmitted: true,
      },
    };


    this.handleInfoSubmit = this.handleInfoSubmit.bind(this);
  }


  handleInfoSubmit(){
    
  }

  render() {
    const { info } = this.state;
    return (
      <div>
        <div>
          <PersonInfo info={info} />
          {!info.isSubmitted && <PersonInfoEdit />}
        </div>
        <div>
          <h2>Education</h2>
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
