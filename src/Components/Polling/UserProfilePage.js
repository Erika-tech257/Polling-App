import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App-header">
        <h2 className="mb-5 welcome-title">Welcome Back, Nick</h2>

        <input className="input" type="text" placeholder="Department" />
        
          <button className="button is-info mt-1">Save</button>
          
        
        <h4>
          {' '}
          <Link to="#">Current</Link> Poll
        </h4>
        <h4>
          <Link to="#">Completed Polls</Link> Results
        </h4>
      </div>
    );
  }
}

export default (UserProfilePage);
