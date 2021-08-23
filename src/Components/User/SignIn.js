import React, { useState } from "react";
import axios from 'axios';
import "./SignIn.css";
import { Button } from "reactstrap";
import { FaUserCircle, FaLock } from "react-icons/fa";
import GoogleButton from "react-google-button";
import { SignInUser, withAuth } from "../../Common/Library";
import { useHistory} from "react-router-dom";


const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  let history = useHistory()

  const handleSubmit = (e) => {
    history.push({withAuth})
    e.preventDefault();
    

    const url =  'https://localhost:44303/token'

    // const url = "https://pollsurveyapp-env.eba-jk6fyvwy.us-east-2.elasticbeanstalk.com/token";

    const data = {
      username: email,
      password: password
     }

     console.log(data)

     axios.post(url, data)
     .then(res => {
       localStorage.setItem('token', res.data.token)
     }).catch(err => {
       console.log(err)
     })


    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Accept": "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(reqBody),
    // })
    //   .then((r) => r.json())
    //   .then((rObj) => {
    //     SignInUser(rObj.token, rObj.userId) 
          // pass in random token and user id. Hard coded for testing purposes in SignInUser
      // })
      // .catch((error) => {
      //   console.log(error)
      // })
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
              placeholder="Email"
              name="Email"
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
  
          <div className="flex-containerone">
             <div className="checkbox"> 
              <input type="checkbox" id="checkbox" name="checkbox" value="" />
              <label htmlFor="checkbox"> Remember Me</label>
              <span className="forgotPass">
                <a href="/forogotPassword">RESET PASSWORD?</a>
              </span>
             </div> 
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
                  <p className="createLink"><a href ="/signup">Create Account</a></p>
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
