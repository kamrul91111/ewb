import React from "react";
import "./topbarcomponent.css";
import {Link} from "react-router-dom";
import {Navbar, Nav, Icon} from "rsuite";
import {toast} from "react-toastify";
// import default style
import "rsuite/dist/styles/rsuite-default.css";
//images
import Logo from "../../assets/ewb.png";

const TopBarComponent = () => {
  //log out user by removing the session storage
  const logout = () => {
    sessionStorage.removeItem("token"); //remove the token
    toast.info("You've been logged out", {
      position: toast.POSITION.TOP_CENTER, //notify user
    });
    setTimeout(() => {
      window.location.reload(); //refresh page after 1000 ms
    }, 1000);
  };

  return (
    <Navbar>
      <Navbar.Header>
        <Link to="/">
          <div className="logoContainer">
            <img src={Logo} style={{width: 50, alignSelf: "center"}} />
          </div>
        </Link>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item>
            <Link to="/">Data Observation</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/collection">Data Collection</Link>
          </Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item onClick={logout}>Logout</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default TopBarComponent;
