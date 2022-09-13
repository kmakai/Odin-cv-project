import React, { Component } from 'react';
import './styles/Appstyle.css';
import { PersonInfo, PersonInfoEdit } from './components/PersonInfo.js';
import { Education, EducationEdit } from './components/Education.js';

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
      edu: {
        entries: [
          {
            dates: '2004-2008',
            schoolName: 'Example University',
            major: 'Exmple Sciences',
          },
        ],
      },
    };

    this.handleInfoSubmit = this.handleInfoSubmit.bind(this);
    this.handleInfoEdit = this.handleInfoEdit.bind(this);

    this.handleEduSubmit = this.handleEduSubmit.bind(this);
  }

  /* Info Section handlers   */
  handleInfoSubmit(e) {
    e.preventDefault();
    const nameInput = document.querySelector('#input-name');
    const titleInput = document.querySelector('#input-title');
    const numberInput = document.querySelector('#input-number');
    const emailInput = document.querySelector('#input-email');

    this.setState({
      info: {
        name: nameInput.value,
        title: titleInput.value,
        phone: numberInput.value,
        email: emailInput.value,
        isSubmitted: true,
      },
    });
  }

  handleInfoEdit() {
    const nameInput = document.querySelector('#input-name');
    const titleInput = document.querySelector('#input-title');
    const numberInput = document.querySelector('#input-number');
    const emailInput = document.querySelector('#input-email');
    const { info } = this.state;

    nameInput.value = info.name ? info.name : '';
    titleInput.value = info.title ? info.title : '';
    numberInput.value = info.phone ? info.phone : '';
    emailInput.value = info.email ? info.email : '';

    this.setState({
      info: {
        name: '',
        title: '',
        phone: '',
        email: '',
        isSubmitted: false,
      },
    });
  }
  /* Info Section handlers   */

  /* Education Section handlers    */
  handleEduSubmit(e) {
    e.preventDefault();
    const datesInput = document.querySelector('#edu-dates');
    const schoolInput = document.querySelector('#edu-school');
    const majorInput = document.querySelector('#edu-major');

    this.setState({
      edu: {
        entries: this.state.edu.entries.concat({
          dates: datesInput.value,
          schoolName: schoolInput.value,
          major: majorInput.value,
        }),
      },
    });
    console.log(this.state);
  }
  /* Education Section handlers    */
  render() {
    const { info } = this.state;
    const { entries } = this.state.edu;
    return (
      <div>
        <div className="info">
          <PersonInfo info={info} handleEdit={this.handleInfoEdit} />
          <PersonInfoEdit handleInfoSub={this.handleInfoSubmit} />
        </div>
        <div className="education">
          <h2>Education</h2>
          <hr />
          <div className="education-wrapper">
            <Education entries={entries} />
            <EducationEdit handleEduSubmit={this.handleEduSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
