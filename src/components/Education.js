import React, { Component } from 'react';
import "../styles/edu.css"

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { entries } = this.props;
    return <div className="entry">{entries.map((entry) => <div> <span>{entry.dates}</span> <span>{entry.schoolName}</span> <span>{entry.major}</span></div>)}</div>;
  }
}

class EducationEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div></div>;
  }
}

export { Education, EducationEdit };
