import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/Logo2.png";
import "./MyNavBar.css";

const MyNavbar = () => {
  return (
    <div id="home">
      <Navbar
        fixed="top"
        variant="light"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <Navbar.Brand href="#home">
          <img src={Logo} className="logo" alt="logo" />
        </Navbar.Brand>

        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">WHO</Nav.Link>
              <Nav.Link href="#skills">WHAT</Nav.Link>
              <Nav.Link href="#project">HOW</Nav.Link>
              <Nav.Link href="#contact">WHERE</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
