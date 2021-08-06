import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserProfilePage.css";
import { FaPoll, FaClipboardCheck } from "react-icons/fa";
class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="mainDiv App-header margin_top">
        <h1 className="admin-initials m-6">{}</h1>
        <h5 className="mb-5 welcome-title">Welcome "Name"!</h5>

        <div className="currentPoll">
          <i class="fa fa-poll icon">
            {" "}
            <FaPoll />
          </i>
          <p>
            <Link to="/pollingQuestions">Current</Link> Poll
          </p>
        </div>

        <div className="currentPoll">
          <i class="fa fa-clipboard icon">
            {" "}
            <FaClipboardCheck />
          </i>
          <p>
            <Link to="#">Completed</Link> Polls
          </p>
        </div>
      </div>
    );
  }
}

export default UserProfilePage;
