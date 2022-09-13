import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { entries } = this.props;
    return (<div>{entries.map((entry) => entry.dates)}</div>);
  }
}

class EducationEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return( <div></div>);
  }
}

export { Education, EducationEdit };
