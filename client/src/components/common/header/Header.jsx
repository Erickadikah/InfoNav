import React from "react";
import "./Header.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header border">
      <section className="header-top">
        <section className="header-top__logo">
          <img
            src="./mylogo.svg"
            alt="ai"
            style={{
              width: "100%",
              height: "65%",
            }}
          />
          <a
            href="/"
            className="header-logo"
            style={{
              fontSize: "1rem",
              color: "white",
            }}
          >
            Info Nav
          </a>
        </section>
        <section className="header-top__navbar">
            <Button variant="outlined" color="primary">
              Signup
            </Button>
          <a to="/signin">
          <Button variant="outlined" color="primary">
            {" "}
            Login
          </Button>
          </a>
        </section>
      </section>
    </section>
  );
}

export default Header;
