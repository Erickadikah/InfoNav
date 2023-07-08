import React from "react";
// import Content from './Content';
import "./Landingpage.css";
import GoogleAuth from "./GoogleAuth";
import Landingsidebar from "./Landingsidebar";
import { Link } from "react-router-dom";
import { Info } from "@material-ui/icons";
import Footer from "../components/Footer/index";
import Services from "../components/Services/index";
import icon from "../images/share.svg";
import image from "../images/image2.svg";
import share from "../images/ideas.svg";

function LandingPage() {
  return (
    <>
      <div className="container">
        <div
          style={{ color: "white", justifyContent: "center", display: "flex" }}
        >
          <article>
            <div>
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "40px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  // color: "#187741",
                }}
              >
                No more Searching for answer on google!
                <br></br>Get your answers from the best
                <span style={{ color: "#187741" }}>
                  {" "}
                  Agriculture answers{" "}
                </span>{" "}
                <br></br>
                across all your
                <span style={{ color: "#187741" }}> devices with Imfo nav</span>
                with InfoNav
              </h1>
              <p>
                InfoNav is a platform that help you get your information powored
                by AI.
              </p>
              <section style={{ display: "flex", gap: "50px" }}>
                <span
                  className="top_button"
                  style={{
                    height: "50px",
                    width: "200px",
                    borderRadius: "10px",
                    border: "1px solid white",
                  }}
                >
                  <Link
                    className="text_decorator"
                    to="/signup"
                    style={{ color: "white" }}
                  >
                    Login
                  </Link>
                </span>
                <span
                  className="top_button"
                  style={{
                    height: "50px",
                    width: "200px",
                    background: "#187741",
                    borderRadius: "10px",
                    border: "1px solid white",
                  }}
                >
                  <Link
                    className="text_decorator"
                    to="/signup"
                    style={{ color: "black" }}
                  >
                    Get started
                  </Link>
                  {/* <GoogleAuth /> */}
                </span>
              </section>
            </div>
          </article>
        </div>
      </div>
      <div
        className="container-2"
        style={{ width: "50%", marginRight: "20px" }}
      >
        <div className="firstContent">
          <article style={{ marginLeft: "50px", marginBottom: "50px" }}>
            <h1 style={{ fontWeight: "bold" }}>
              No more Searching for answer on google! Get your answers from the
              best
              <span style={{ color: "#187741" }}> Agriculture Solutions </span>
              <br></br>
              across all your
              <span style={{ color: "#187741" }}> devices with Info nav</span>
            </h1>
            <p
              style={{
                fontFamily: "sans-serif",
                lineHeight: "1.5",
              }}
            >
              InfoNav is a platform that help you get your information powored
              by AI chat with our model today for free. Our AI-enhanced website
              leverages advanced machine learning algorithms to provide farmers
              with real-time weather forecasts, market prices, and disease
              control methods.
            </p>
          </article>
          <div style={{ marginLeft: "200px" }}>
            <h1>Get it now with InfoNav</h1>
            <div
              style={{ display: "flex", gap: "100px", alignItems: "center" }}
            >
              <div>
                <img
                  src={icon}
                  alt="icon"
                  style={{
                    width: "100%",
                    height: "100%",
                    marginBottom: "10px",
                    marginRight: "50px",
                  }}
                />
                <p style={{ textAlign: "center" }}>Great growth</p>
              </div>
            </div>
            <div style={{ marginTop: '50px'}}>
            <span
              className="top_button"
              style={{
                height: "50px",
                width: "200px",
                borderRadius: "5px",
                border: "1px solid white",
                background: "#145038",
              }}
            >
              <Link
                className="text_decorator"
                to="/signup"
                style={{ color: "white", fontWeight: 'bold' }}
              >
                Get started Now !
              </Link> 
            </span>
          </div>
          </div>
          {/* <div style={{ justifyContent: 'flex-end' }}>
          <img src='https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
            alt='image'
            style={{ width: '100%', height: '100%' }}
        />
            </div> */}
        </div>
        </div>
      <Services />
      <div>
        <Footer />
      </div>
    </>
  );
}
export default LandingPage;
