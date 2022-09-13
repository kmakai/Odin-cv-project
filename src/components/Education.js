import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {entries} = this.props;
    return <div>
      {
        entries.forEach(entry =>{
          return <div> </div>
        })
      }
    </div>;
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
