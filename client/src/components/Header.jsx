import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./logo.png";
import { logout } from "../actions/userAction";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    console.log("logging out");
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
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item className="tab">
          <Nav.Link style={{ color: "white" }} href="/">
            All Products
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="tab">
          <Nav.Link style={{ color: "white" }} href="/cameras">
            Cameras
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="tab">
          <Nav.Link style={{ color: "white" }} eventKey="link-2" href="/Lenses">
            Lenses
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="tab">
          <Nav.Link
            style={{ color: "white" }}
            eventKey="link-2"
            href="/byprice"
          >
            Sort By Price
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="tab">
          <Nav.Link style={{ color: "white" }} eventKey="link-2" href="/byname">
            Sort By Name
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="tab">
          <Nav.Link style={{ color: "white" }} eventKey="link-2" href="/search">
            Search
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Header;
