import React, { Component } from 'react';

class PersonInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
    return (
      <div>
        <div>
          <h2>{info.name}</h2>
          <h3>{info.title}</h3>
        </div>
        <div>
          <span>Phone:</span> {info.phone}
        </div>
        <div>
          <span>Email:</span> {info.email}
        </div>
        <button>Edit</button>
      </div>
    );
  }
}

class PersonInfoEdit extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <form onSubmite={props.handleInfoSub}>
          <div><input type="text" placeholder="Your Name: John Doe" id="input-name"/></div>
          <div><input type="text" placeholder="Your Title: Manager" id="input-title"/></div>
          <div><input type="text" placeholder="Your Number: 860-555-5555" id="input-number"/></div>
         <div><input type="text" placeholder="Your Email: JohnDoe@example.com" id="input-email"/></div>
         <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export {PersonInfo, PersonInfoEdit};
