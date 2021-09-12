import React from "react";
import "./topbarcomponent.css";
import {Link} from "react-router-dom";
import {Navbar, Nav, Icon} from "rsuite";
// import default style
import "rsuite/dist/styles/rsuite-default.css";
//images
import Logo from "../../assets/ewb.png";

const TopBarComponent = () => {


  //log out user by removing the session storage
  const logout = () => {
    sessionStorage.removeItem('token')
    window.location.reload()
  }

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
          <Nav.Item icon={<Icon icon="home" />}>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/collection">Data Collection</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/observation'>Data Observation</Link>
          </Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item onClick={logout}>
            Logout
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default TopBarComponent;
