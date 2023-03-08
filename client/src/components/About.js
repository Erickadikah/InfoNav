import React from "react"
import "./About.css"
import { Link } from "react-router-dom";
import "./HomeSidebar.css";

function About() {
  return (
    <>
      <div className="content">
        <div class="topbar">
          <ul class="nav-list">
            <div class="logo">
            </div>
            <li><h3>INFO NAV</h3></li>
          </ul>
          <div class="rightbar">
            <h3>Streamline Connect Transform</h3>
          </div>
        </div>
        <h2 style={{ textAlign: "center", color:'white' }}>About Us</h2>
        </div>
        <span className="top_button" style={{height: "50px", 
          width: "200px",
          background: '#062A42',
          
        }}>
          <Link className="text_decorator" to="/home" style={{ color: 'white',}}>Home</Link>
          </span>
            <div className='abouttext'>
            <p style={{ alignContent: 'center', display: 'block', display: 'inline', color : 'white'}}>
              We are a team of three software engineers with a passion for using technology to solve real-world problems.
              Our goal is to leverage the power of artificial intelligence to improve the lives of farmers in Africa and
              help them overcome the challenges they face.</p>

              <p style={{ color : 'white'}}>Our story started when we were introduced to the problems faced by farmers in Africa.
              Despite being the backbone of many African economies, farmers often struggle to access vital information,
              such as weather forecasts, market prices, and disease control methods. This lack of information leads to
              reduced yields, increased costs, and lower income for farmers.</p>

              <p style={{ color : 'white'}}>Inspired by this challenge, we decided to develop an AI-enhanced website that would provide farmers with the information
              they need to make informed decisions. We worked tirelessly to build a platform that could collect, analyze, and present data
              in a way that was easily accessible and understandable for farmers
              Our AI-enhanced website leverages advanced machine learning algorithms to provide farmers with real-time weather forecasts,
              market prices, and disease control methods. This information is delivered through an easy-to-use interface, making it accessible
              to even the most technologically challenged farmers.</p>

              <p style={{ color : 'white'}}>We are proud to be using our skills and expertise to make a positive impact on the lives of farmers in Africa.
              Our team is dedicated to continuously improving our platform and expanding its reach, so that more and more
              farmers can benefit from the information it provides.</p>

              <p style={{ color : 'white'}}>Our mission is to empower farmers with the tools and information they need to improve their yields, reduce their costs,
              and increase their income. We believe that by doing so, we can help to create a more sustainable and prosperous future for farmers in Africa.
              Join us on this journey as we work to make a difference, one farmer at a time.
              </p>
              <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
              <span className="top_button" style={{height: "50px", width: "200px"}}>
              <Link className="text_decorator" to="/home" style={{ color: 'white',}}>Explore Info nav</Link>
              </span>
              <span className="top_button" style={{height: "50px", 
              width: "200px",
              background: '#062a42',
            }}>
              <Link className="text_decorator" to="/home" style={{ color: 'white',}}>Learn More</Link>
              </span>
               <span className="top_button" style={{height: "50px", width: "200px"}}>
              <Link className="text_decorator" to="/Register" style={{ color: 'white',}}>Sign up</Link>
              </span>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

              </div>
              </div>
          <div style={{textAlign: 'center', color: 'black'}}>
          <h3> The Team </h3>
          </div>
    </>
  )
}

export default About