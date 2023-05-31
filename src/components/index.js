import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Index() {
    const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>TechEdgeSmart</h1>
        <marquee  direction="right" behavior="alternate"  ><h2>~Unlock the Power of Smartphones, One Byte at a Time📱!!!~</h2></marquee>
      </div>
      <form action="">
        <div className="headingsContainer">
          <br /><br /><h3>Sign in</h3>
          <p>Sign in with email and password</p>
        </div>

        <div className="mainContainer">
          <label htmlFor="username">Your email</label>
          <input type="text" placeholder="email" name="username" required />

          <br></br>

          <label htmlFor="pswrd">Your password</label>
          <input type="password" placeholder="password" name="pswrd" required />

          <br /><br /><br /><button onClick={()=>navigate("/home")}>Login</button>

          <p className="register">Not a member?  <Link to="/resgistration">Register here!</Link></p>
        </div>
      </form>
    </>
  );
}