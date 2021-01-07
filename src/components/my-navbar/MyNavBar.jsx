import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/Logo2.png";
import "./MyNavBar.css";

const MyNavbar = () => {
  return (
    <>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <Navbar.Brand href="#home">
          <img src={Logo} className="logo" alt="Tyler Oh logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mc-auto">
            <Nav.Link href="#about">WHO</Nav.Link>
            <Nav.Link href="#project">WHAT/HOW</Nav.Link>
            <Nav.Link href="#contact">WHERE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
