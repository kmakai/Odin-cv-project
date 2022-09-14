import React, { Component } from 'react';
import '../styles/edu.css';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { eduEntries } = this.props;
    const { handleEEdit } = this.props;
    return (
      <div className="entries">
        {eduEntries.map((entry, index) => (
          <div>
            {' '}
            <span>{entry.dates}</span> <span>{entry.schoolName}</span>{' '}
            <span>{entry.major}</span>
            <button onClick={() => handleEEdit(index)}>Edit</button>
          </div>
        ))}
      </div>
    );
  }
}

class EducationEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleEduSubmit } = this.props;
    return (
      <div>
        <form className="edu-form" onSubmit={handleEduSubmit}>
          <input
            type="text"
            placeholder="Enter dates eg. 2000-2004"
            id="edu-dates"
          />
          <input type="text" placeholder="Enter school name" id="edu-school" />
          <input
            type="text"
            placeholder="Enter major eg. Social science"
            id="edu-major"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export { Education, EducationEdit };
