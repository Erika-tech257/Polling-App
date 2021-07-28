import React, { useState } from "react";
import "./SignIn.css";
import { Button } from "reactstrap";
import { FaUserCircle, FaLock } from "react-icons/fa";
import GoogleButton from "react-google-button";
// import { createAuthIdentity, getHomePage } from "../../Common/Utility";

const SignIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const url =
      "http://pollsurveyapp-env.eba-jk6fyvwy.us-east-2.elasticbeanstalk.com/Api/token";

    const body = {
      username: username,
      password: password,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((r) => r.json())
      .then((rObj) => props.updateToken(rObj.sessionToken, rObj.user.id));
  };

  return (
    <div className="mainDiv App-header">
      <header className="sub-title">Login</header>
      <br />
      <div>
        <form className="signin">
          {/* <h2>Register Form</h2> */}

          <div className="input-container">
            <i className="fa fa-user icon">
              {" "}
              <FaUserCircle />
            </i>
            <input
              className="input-field"
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <i className="fa fa-key icon">
              {" "}
              <FaLock />
            </i>
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex-containerone">
            <form className="checkbox">
              <input type="checkbox" id="checkbox" name="checkbox" value="" />
              <label for="checkbox"> Remember Me</label>
              <span className="forgotPass">
                <a href="#">FORGOT PASSWORD?</a>
              </span>
            </form>
          </div>
          <br />

          <div className="container">
            <div className="row">
              <div className="col text-center">
                <Button
                  className="btn btn-default btn-lg btn-submit mb-2"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
                <br />
                <div className="flex-containertwo">
                  <div className="lines">
                    <p className="or">or</p>
                  </div>
                </div>
                <span className="googlebtn">
                  <GoogleButton
                    onClick={() => {
                      console.log("Google button clicked");
                    }}
                  />
                </span>
                <div className="flex-container">
                  <h6> Don't Have An Account? </h6>
                  <p className="createLink"><a href ="http://localhost:3000/signup ">Create Account</a></p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
