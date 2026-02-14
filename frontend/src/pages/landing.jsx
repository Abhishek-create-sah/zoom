import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="landing-container">
      <nav>
        <div className="nav-header">
          <h2>MeetUp</h2>
        </div>
        <div className="nav-list">
          <p>Join as Guest</p>
          <p>Register</p>
          <div role='button'>
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landing-main-container">
        <div>
          <h1><span style={{color: "#FF9839"}}> Connect</span> with your loved Ones</h1>
          <p>Cover a distance by MeetUp</p>
          <div role='button' className="get-started-btn">
            <Link to={"/auth"}>Get Started</Link>
          </div>

        </div>
        <div>
          <img src="/mobile.png" alt="Mobile App Preview"></img>
          </div> 
      </div>
    </div>
  )
}

export default Landing