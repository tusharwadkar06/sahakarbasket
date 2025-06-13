import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import group from '../assets/images/Group.png';
import plant from '../assets/images/Plant.png';
import character from '../assets/images/Character.png';
import speech_bubble from '../assets/images/Speech_bubble.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
      <div className="login-bg">
        <div className="login-header">
          <span>Your Logo</span>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: "row",
          margin: "70px 0 0 300px"
        }}>


          <div className="login-illustration-bg">
            <img src={plant} alt="plant left" className="plant plant-left" />
            <img src={plant} alt="plant right" className="plant plant-right" />
            <img src={group} alt="background group" className="group-bg" />
          </div>
          <div className="login-content">
            <div className="login-card">
              <h2>Welcome to Sahakar Basket !</h2>
              <h3>Sign in </h3>

              <form>
                <label>User name</label>
                <input
                  type="text"
                  placeholder="Enter your user name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <label>Password</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <div className="form-options">
                  <label>
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <span style={{ marginLeft: 4 }}>Remember me</span>
                  </label>
                  <a href="#">Forgot Password ?</a>
                </div>

                <button className="login-btn" type="submit">Login</button>
              </form>
              <p className="bottom-text">
                Don’t have an Account ? <a href="#">Register</a>
              </p>
            </div>
            <div className="login-character">
              <img src={character} alt="character" className="character-img" />
              <img src={speech_bubble} alt="speech bubble" className="speech-bubble-img" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Make sure html and body take full height */
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
        }

        .login-bg {
          height: 100vh; /* Full viewport height */
          background: #fff;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          position: relative;
        }
        .login-header {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 18px;
          padding: 28px 0 0 32px;
          color: #111;
          z-index: 2;
        }
        .login-illustration-bg {
          position: absolute;
          left: 270px; top: 0; width: 100%; height: 100%;
          z-index: 0;
          pointer-events: none;
        }
        .plant {
          position: absolute;
          width: 70px;
          bottom: 60px;
          z-index: 1;
        }
        .plant-left {
          left: 45px;
         
        }
        .plant-right {
          right: 30%;
          transform: scaleX(-1);
        }
        .group-bg {
          position: absolute;
          left: 12%;
          bottom: 9%;
          transform: translateX(-50%);
          width: 200px;
        }
        .login-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .login-card {
          max-width: 250px;
          width: 30%;
          min-width: 320px;
          height: 65vh;
          background: #fff;
          box-shadow: 0 0 32px 0 rgba(231, 217, 217, 0.07);
          border-radius: 12px;
          border: 1.5px solid rgb(219, 205, 205);
          padding: 44px 38px 36px 38px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
        }
        .login-card h2 {
          font-size: 24px;
          font-weight: 400;
          margin-bottom: 8px;
          margin-top: 0px;
          letter-spacing: 0.5px;
        }
        .login-card h3 {
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 4px;
          margin-top: 15px;
          letter-spacing: 0.5px;
        }
        .login-card p {
          color: #222;
          margin-bottom: 22px;
          margin-top: 0;
          font-size: 15px;
          font-weight: 400;
          // background: blue;
        }
        .login-card label {
          display: block;
          margin: 18px 0 7px;
          font-weight: 500;
          color: #222;
          font-size: 14px;
        }
        .login-card input[type='text'],
        .login-card input[type='password'] {
          width: 100%;
          padding: 13px 12px;
          border: 1.5px solid #d3d3d3;
          border-radius: 7px;
          font-size: 15px;
          margin-bottom: 0;
          background: #fff;
          font-family: 'Poppins', sans-serif;
          transition: border 0.2s;
        }
        .login-card input[type='text']:focus,
        .login-card input[type='password']:focus {
          border: 1.5px solid #2f56f7;
          outline: none;
        }
        .password-wrapper {
          position: relative;
        }
        .password-wrapper input {
          padding-right: 38px;
        }
        .password-wrapper span {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          color: #888;
        }
        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          margin-top: 10px;
          margin-bottom: 0;
        }
        .form-options a {
          color: #888;
          text-decoration: none;
          font-size: 13px;
        }
        .login-btn {
          width: 100%;
          padding: 0px;
          height: 30px;
          background-color: #2f56f7;
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 7px;
          margin-top: 22px;
          font-size: 17px;
          cursor: pointer;
          transition: background 0.2s;
          letter-spacing: 0.5px;
        }
        .login-btn:hover {
          background: #1d3ec2;
        }
        .bottom-text {
          text-align: center;
          margin-top: 0px;
          color: #888;
          font-size: 15px;
        }
        .bottom-text a {
          color: #2f56f7;
          font-weight: 600;
          text-decoration: none;
        }
        .login-character {
          position: relative;
          width: 340px;
          min-width: 260px;
          margin-left: -115px;
          padding-top: 28px;
          display: flex;
          align-items: center; /* Center vertically */
          justify-content: center; /* Center horizontally */
          flex-direction: column;
        //  background: blue;
        }
        .character-img {
          width: 150px;
          height: 50%;
          z-index: 2;
        }
        .speech-bubble-img {
          position: absolute;
          top: 0;
          right: 0;
          width: 70px;
          z-index: 3;
        }
        @media (max-width: 1100px) {
          .group-bg {
            width: 260px;
          }
          .login-character {
            width: 200px;
          }
          .character-img {
            width: 140px;
          }
        }
        @media (max-width: 900px) {
          .login-content {
            flex-direction: column;
            gap: 0;
            padding: 0 10vw;
          }
          .login-character {
            margin-top: 24px;
            justify-content: center;
            width: 100%;
          }
        }
        @media (max-width: 600px) {
          .login-header {
            padding-left: 12px;
            font-size: 16px;
          }
          .login-content {
            padding: 0 2vw;
          }
          .login-card {
            padding: 24px 8px 18px 8px;
          }
          .login-character {
            width: 100%;
          }
          .character-img {
            width: 100px;
          }
          .speech-bubble-img {
            width: 40px;
          }
          .plant {
            width: 40px;
            bottom: 20px;
          }
          .plant-left {
            left: 8px;
          }
          
        }
      `}</style>
    </>
  );
};

export default Login;




