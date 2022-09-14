import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { expEntries } = this.props;
    const { handleExEdit } = this.props;
    return (
      <div className="exp-entries">
        {expEntries.map((entry, index) => (
          <div>
            {' '}
            <span className="exp-entrydates">{entry.dates}</span> <span className="exp-entrycompany">{entry.companyName}</span>{' '}
            <br />
            <span className="exp-entrytitle">{entry.title}</span>
            <p className="exp-entrydesc">{entry.desc}</p>
            <button onClick={() => handleExEdit(index)}>Edit</button>
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
    // const { handleExpSubmit } = this.props;
    return (
      <div>
        <form className="exp-form" >
          <input
            type="text"
            placeholder="Enter dates eg. 2000-2004"
            id="exp-dates"
          />
          <input type="text" placeholder="Enter company name" id="exp-company" />
          <input
            type="text"
            placeholder="Enter title eg. Manager"
            id="exp-title"
          />
          <textarea id="" cols="30" rows="10" placeholder="Enter a description of your duties"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export {Experience, ExperienceEdit}