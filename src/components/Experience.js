import React, { Component } from 'react';
import '../styles/exp.css';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { expEntries } = this.props;
    const { handleExpEdit } = this.props;
    return (
      <div className="exp-entries">
        {expEntries.map((entry, index) => (
          <div className="entry">
            {' '}
            <span className="exp-entrydates">{entry.dates}</span>{' '}
            <span className="exp-entrycompany">{entry.companyName}</span>
            <span className="exp-entrytitle">Position: {entry.title}</span>
            <p className="exp-entrydesc">
              <span>Duties:</span>
              {entry.desc}
            </p>
            {handleExpEdit && (
              <button onClick={() => handleExpEdit(index)}>Edit</button>
            )}
          </div>
        ))}
      </div>
    );
  }
}

class ExperienceEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleExpSubmit } = this.props;
    return (
      <div>
        <form className="exp-form" onSubmit={handleExpSubmit}>
          <input
            type="text"
            placeholder="Enter dates eg. 2000-2004"
            id="exp-dates"
          />
          <input
            type="text"
            placeholder="Enter company name"
            id="exp-company"
          />
          <input
            type="text"
            placeholder="Enter title eg. Manager"
            id="exp-title"
          />
          <textarea
            id="exp-desc"
            cols="30"
            rows="10"
            placeholder="Enter a description of your duties"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export { Experience, ExperienceEdit };
