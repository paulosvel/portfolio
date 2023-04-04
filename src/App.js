import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import { Link } from "react-scroll";
import { useState } from "react";
import SidebarEmail from "./components/SidebarEmail";

function App() {

  return (

    <BrowserRouter>
      <>
        <div
          className="navbar"
          style={{
            color: "#CCD6F6",
            fontFamily:
              '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
              position: "sticky",
              top:"0"
          }}
        >
         <Link
            activeClass="active"
           smooth to="about"
            spy={true}
            duration={700}
            className="about"
            style={{
              paddingRight: "2%",
              fontFamily:
                '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <span style={{ color: "#64ffda" }}>01.</span> About{" "}
          </Link>
          <a
            className="experience"
            style={{
              paddingRight: "2%",
              fontFamily:
                '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
              cursor: "pointer",
            }}
          >
            <span style={{ color: "#64ffda" }}>02.</span>Experience{" "}
          </a>
          <a
            className="projects"
            style={{
              paddingRight: "2%",
              fontFamily:
                '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
              cursor: "pointer",
            }}
          >
            <span style={{ color: "#64ffda" }}>03.</span>Projects{" "}
          </a>
          <a
            className="contact"
            style={{
              paddingRight: "2%",
              fontFamily:
                '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
              cursor: "pointer",
            }}
          >
            <span style={{ color: "#64ffda" }}>04.</span>Contact{" "}
          </a>
          <button
            className="resume"
            style={{
              color: "#64ffda",
              fontFamily: "SF-Mono",
              backgroundColor: "transparent",
              borderRadius: "4px",
              border: "1px solid #64ffda",
              cursor: "pointer",
              padding: "0.75rem 1rem",
              fontFamily:
                '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
            }}
          >
            Resume
          </button>
        </div>
        <div className="App">
          <h1
            style={{
              fontSize: "16px",
              fontFamily:
                '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
              margin: "0",
            }}
          >
            Hi, my name is
          </h1>
          <p style={{ fontSize: "80px", margin: "0", fontWeight: "bold" }}>
            Paulos Velissarakos.
          </p>
          <p
            style={{
              color: "#8892B0",
              fontSize: "80px",
              margin: "0",
              fontFamily:
                '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif"',
              fontWeight: "bold",
            }}
          >
            I build things for the web.
          </p>
          <p
            style={{
              color: "#8892B0",
              fontFamily:
                '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif',
              width: "40%",
              fontSize: "20",
            }}
          >
            I am a self-taught full stack developer with a passion for building
            web applications. Through self-directed learning and practical
            application, I have gained a deep understanding of both front-end
            and back-end development.
          </p>
        </div>
      </>
      <SidebarEmail />
      <About />
    </BrowserRouter>
  );
}

export default App;
