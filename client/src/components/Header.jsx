import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./logo.png";
import { logout } from "../actions/userAction";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    console.log("logout");
    dispatch(logout());
  };
  return (
    <header>
      <Navbar
        className="navb"
        bg="dark"
        expand="lg"
        variant="dark"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="brandTitle">
              <img className="logo" src={logo} alt="logo" />{" "}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* margin start...margin end */}
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  {/* fas...fontawesome */}
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Nav bg="dark" fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item variant="dark">
          <Nav.Link variant="dark" href="/home">
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Loooonsdfsdfger NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Header;
