import React, { Component } from 'react';
import './styles/Appstyle.css';
import { PersonInfo, PersonInfoEdit } from './components/PersonInfo.js';
import { Education, EducationEdit } from './components/Education.js';
import { Experience, ExperienceEdit } from './components/Experience.js';

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
        eduEntries: [
          {
            dates: '2004-2008',
            schoolName: 'Example University',
            major: 'Exmple Sciences',
          },
        ],
      },
      exp: {
        expEntries: [
          {
            dates: '2004-2008',
            companyName: 'Example Company',
            title: 'Manager',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo fringilla lobortis. Aliquam vitae maximus sem, nec laoreet libero. In nec aliquam ex, vitae laoreet.',
          },
        ],
      },
    };

    this.handleInfoSubmit = this.handleInfoSubmit.bind(this);
    this.handleInfoEdit = this.handleInfoEdit.bind(this);

    this.handleEduSubmit = this.handleEduSubmit.bind(this);
    this.handleEduEdit = this.handleEduEdit.bind(this);

    this.handleExpSubmit = this.handleExpSubmit.bind(this);
  }

  /* Info Section handlers  */
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
  /* Info Section handlers */

  /* Education Section handlers */
  handleEduSubmit(e) {
    e.preventDefault();
    const datesInput = document.querySelector('#edu-dates');
    const schoolInput = document.querySelector('#edu-school');
    const majorInput = document.querySelector('#edu-major');

    this.setState({
      edu: {
        eduEntries: this.state.edu.eduEntries.concat({
          dates: datesInput.value,
          schoolName: schoolInput.value,
          major: majorInput.value,
        }),
      },
    });

    datesInput.value = schoolInput.value = majorInput.value = '';
  }

  handleEduEdit(index) {
    const datesInput = document.querySelector('#edu-dates');
    const schoolInput = document.querySelector('#edu-school');
    const majorInput = document.querySelector('#edu-major');
    const arr = this.state.edu.eduEntries;

    const [entryToEdit] = arr.splice(index, 1);

    datesInput.value = entryToEdit.dates;
    schoolInput.value = entryToEdit.schoolName;
    majorInput.value = entryToEdit.major;

    this.setState({
      edu: {
        eduEntries: arr,
      },
    });
  }
  /* Education Section handlers */

  /* Experience Section handlers */
  handleExpSubmit(e) {
    e.preventDefault();
    const datesInput = document.querySelector('#exp-dates');
    const companyInput = document.querySelector('#exp-company');
    const titleInput = document.querySelector('#exp-title');
    const descInput = document.querySelector('#exp-desc');

    this.setState({
      exp: {
        expEntries: this.state.exp.expEntries.concat({
          dates: datesInput.value,
          companyName: companyInput.value,
          title: titleInput.value,
          desc: descInput.value,
        }),
      },
    });
  }

  handleExpEdit(index) {
    const datesInput = document.querySelector('#exp-dates');
    const companyInput = document.querySelector('#exp-company');
    const titleInput = document.querySelector('#exp-title');
    const descInput = document.querySelector('#exp-desc');
    const arr = this.state.exp.expEntries;
    const [entryToEdit] = arr.splice(index, 1);

    datesInput.value = entryToEdit.dates;
    companyInput.value = entryToEdit.companyName;
    titleInput.value = entryToEdit.title;
    descInput.value = entryToEdit.desc;

    this.setState({
      exp: {
        expEntries: arr,
      },
    });
  }
  /* Experience Section handlers */

  render() {
    const { info } = this.state;
    const { eduEntries } = this.state.edu;
    const { expEntries } = this.state.exp;
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
            <Education
              eduEntries={eduEntries}
              handleEEdit={this.handleEduEdit}
            />
            <EducationEdit handleEduSubmit={this.handleEduSubmit} />
          </div>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <hr />
          <div className="experience-wrapper">
            <Experience expEntries={expEntries} />
            <ExperienceEdit handleExpSubmit={this.handleExpSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
