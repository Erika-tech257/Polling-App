import SignIn from "./SignIn";
import "./Signup.css";
import React, { useState } from "react";
import { Button } from "reactstrap";
import { FaEnvelope, FaUserCircle, FaLock } from "react-icons/fa";
import GoogleButton from "react-google-button";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const baseUrl =
      "http://pollsurveyapp-env.eba-jk6fyvwy.us-east-2.elasticbeanstalk.com/Api/Account/Register";

    const body = {
      fullName: fullName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    fetch(baseUrl, {
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
    <div className="mainDiv">
      <header className="sub-title">Create Account</header>
      <br />
      <div>
        <form className="signup">
          <div class="input-container">
            <i class="fa fa-user icon">
              {" "}
              <FaUserCircle />
            </i>
            <input
              class="input-field"
              type="text"
              placeholder="First & Last Name"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div class="input-container">
            <i class="fa fa-envelope icon">
              {" "}
              <FaEnvelope />
            </i>
            <input
              class="input-field"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div class="input-container">
            <i class="fa fa-key icon">
              {" "}
              <FaLock />
            </i>
            <input
              class="input-field"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div class="input-container">
            <i class="fa fa-key icon">
              {" "}
              <FaLock />
            </i>
            <input
              class="input-field"
              type="password"
              placeholder="Confirm Password"
              name="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="input-containerone">
            <p className="admintext"> Enter 4 Digit Admin PIN </p>
            <input
              type="text"
              class="pin"
              name="pin"
              maxLength="4"
              size="4"
              value=""
            />
          </div>
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <Button
                  className="btn btn-default btn-lg btn-submit mb-2"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign Up
                </Button>
                <br />
                <div className="flex-containertwo">
                  <div className="lines">
                    <p className="or">or</p>
                  </div>
                </div>
                <span className="googlebtn">
                  <GoogleButton
                    label="Sign up with Google"
                    onClick={() => {
                      console.log("Google button clicked");
                    }}
                  />
                </span>

                <div className="flex-container">
                  <h6> Already Have An Account? </h6>
                  <p className="createLink"><a href ="http://localhost:3000/signin ">Login Here</a></p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
