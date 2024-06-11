import "./login.css"
import React from 'react';
import video from '../../Assets/login.mp4'
import {Link} from 'react-router-dom'
import logo from '../../Assets/logo.png'
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import '../../../src/app.css'
function Login() {
  return (
   <div className="loginPage flex">
    <div className="container flex">
        <div className="vidoeDiv">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
                <h2 className="title">Plan Your Best Trip</h2>
            </div>
            <div className="footerDiv flex">
                <span className="text">Don't have an account?</span>
                <Link to={'./register'}>
                    <button className="btn">
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>

        <div className="formDiv flex">
            <div className="headerDiv">
                <img src={logo} alt="Logo" />
                <h3>Welcome Back!</h3>
            </div>
        </div>

        <div className="form grid">
            <span>Login status</span>

            <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <FaUserShield className="icon"/>
                <input type="text" id='username' placeholder="Username" />
            </div>

            <div className="inputDiv">
            <label htmlFor="password">Password</label>
                <BsFillShieldLockFill className="icon"/>
                <input type="text" id='password' placeholder="password" />
            </div>

            <button type="submit" className="btn flex">
                <span>Login</span>
                <AiOutlineSwapRight className="icon"/>
            </button>

            <span className="forgotPassword">
                Forgot your password? <a href="">Click Here</a>
            </span>
        
        </div>


    </div>
   </div>
  );
}
export default Login