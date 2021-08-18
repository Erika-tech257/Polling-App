import "./Signup.css";
import React, { useState } from "react";
import { Button } from "reactstrap";
import { FaEnvelope, FaUserCircle, FaLock } from "react-icons/fa";
import GoogleButton from "react-google-button";
import { API_URL } from "../../Common/Environment";
import { SignInUser } from "../../Common/Utility";



const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const url = 
      `${API_URL}/Account/Register`;
    // const baseUrl = "http://pollsurveyapp-env.eba-jk6fyvwy.us-east-2.elasticbeanstalk.com/Api/Account/Register";

    const reqBody = {
      firstName: firstName,
      lastName: lastName, 
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    })
      .then((r) => r.json())
      .then((rObj) => {
        SignInUser(rObj.token, rObj.id)
        console.log(SignInUser)
      })
      .catch((error) => {
        console.log("Signup error", error)
      })
      window.location.replace(`/userProfilePage/${firstName}`)
  };
  return (
    <div className="mainDiv App-header">
      <header className="sub-title">Create Account</header>
      <br />
      <div>
        <form className="signup">
          <div className="input-container">
            <i className="fa fa-user icon">
              {" "}
              <FaUserCircle />
            </i>
            <input
              className="input-field"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="input-container">
            <i className="fa fa-user icon">
              {" "}
              <FaUserCircle />
            </i>
            <input
              className="input-field"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="input-container">
            <i className="fa fa-envelope icon">
              {" "}
              <FaEnvelope />
            </i>
            <input
              className="input-field"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="input-container">
            <i className="fa fa-key icon">
              {" "}
              <FaLock />
            </i>
            <input
              className="input-field"
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
              className="pin"
              name="pin"
              maxLength="4"
              size="4"
              value=""
            />
          </div>
        
          <div className="container">
            <div className="row">
              <div className="col text-center">
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
                  <p className="createLink">
                    <a href="http://localhost:3000/signin">Login Here</a>
                  </p>
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
