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
        <form >
          <div><input type="text" placeholder="Your Name: John Doe" /></div>
          <div><input type="text" placeholder="Your Title: Manager" /></div>
          <div><input type="text" placeholder="Your Number: 860-555-5555" /></div>
         <div><input type="text" placeholder="Your Email: JohnDoe@example.com" /></div>
         <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export {PersonInfo, PersonInfoEdit};
