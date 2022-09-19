import React, { Component } from 'react';
import '../styles/info.css';

class PersonInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
    const { handleEdit } = this.props;
    return (
      <div className="personal-info">
        <div>
          <h2>{info.name}</h2>
          <h3>{info.title}</h3>
        </div>
        <div className="info-phone">
          <span>Phone:</span> {info.phone}
        </div>
        <div className="info-email">
          <span>Email:</span> {info.email}
        </div>
        {handleEdit && <button onClick={handleEdit}>Edit</button>}
      </div>
    );
  }
}

class PersonInfoEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleSub = this.props.handleInfoSub;
    return (
      <div className="personal-info-edit">
        <form onSubmit={handleSub}>
          <div>
            <input
              type="text"
              placeholder="Your Name: John Doe"
              id="input-name"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Title: Manager"
              id="input-title"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Number: 860-555-5555"
              id="input-number"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Email: JohnDoe@example.com"
              id="input-email"
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export { PersonInfo, PersonInfoEdit };
