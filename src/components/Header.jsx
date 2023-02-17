import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../public/gr0logo.png"

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          bg="dark"
          variant="dark"
          sticky="top"
          expand="md"
          collapsOnSelect
        >
      
     <Navbar.Brand href="/">
         <img class="icon" src= {logo} alt="GR0"/>
     </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="headline-generator">
                {" "}
                Headline Generator{" "}
              </Nav.Link>
              <Nav.Link href="description-generator">
                {" "}
                Description Generator{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
