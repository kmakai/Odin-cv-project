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
        isSubmitted: false,
      },
    };


    this.handleInfoSubmit = this.handleInfoSubmit.bind(this);
    this.handleInfoEdit = this.handleInfoEdit.bind(this);
  }


  handleInfoSubmit(e){
    e.preventDefault();
    const nameInput = document.querySelector("#input-name");
    const titleInput = document.querySelector("#input-title");
    const numberInput = document.querySelector("#input-number");
    const emailInput = document.querySelector("#input-email");

    this.setState({
      info: {
        name: nameInput.value,
        title: titleInput.value,
        phone: numberInput.value,
        email: emailInput.value,
        isSubmitted: true,
      }
    })
  }

  handleInfoEdit(){
    const nameInput = document.querySelector("#input-name");
    const titleInput = document.querySelector("#input-title");
    const numberInput = document.querySelector("#input-number");
    const emailInput = document.querySelector("#input-email");
    const {info} = this.state;

    nameInput.value = info.name;
    titleInput.value = info.title;
    numberInput.value = info.phone;
    emailInput.value = info.email;

    this.setState({
      info: {
        name: '',
        title: "",
        phone: "",
        email: "",
        isSubmitted: false,
      }
    })
  }



  render() {
    const { info } = this.state;
    return (
      <div>
        <div className="info">
          <PersonInfo info={info} handleEdit={this.handleInfoEdit}/>
          {!info.isSubmitted && <PersonInfoEdit handleInfoSub={this.handleInfoSubmit}/>}
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
