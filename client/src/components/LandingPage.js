import React from "react";
// import Content from './Content';
import "./Landingpage.css";
import GoogleAuth from "./GoogleAuth";
import Landingsidebar from "./Landingsidebar";
import { Link } from "react-router-dom";
import { Info } from "@material-ui/icons";
import Footer from "../components/Footer/index";
import Services from "../components/Services/index";

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
                    borderRadius: "5px",
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
                    borderRadius: "5px",
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
  <div className="container-2" style={{ width: "50%", marginRight: '20px'}}>
  <div className="firstContent">
    <article>
      <h1 style={{ fontWeight: "bold", justifyContent: "center" }}>
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
        control methods. This information is delivered through an
        easy-to-use interface, making it accessible to even the most
        technologically challenged farmers. We are proud to be using our
        skills and expertise to make a positive impact on the lives of
        farmers in Africa. time.
      </p>
    </article>
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
