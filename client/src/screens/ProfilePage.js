import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfiles } from "../actions/userAction";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, user, error } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        console.log(user);
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== verifyPassword) {
      setMessage("Password does not match");
    } else {
      dispatch(updateUserProfiles({ id: user._id, name, email, password }));
    }
  };

  return (
    <div>
      <Row>
        <Col md={3}>
          <h2> User Profile</h2>
          {message && <p style={{ color: "red" }}>{message}</p>}
          {error && (
            <p style={{ textAlign: "center", color: "red" }}>
              {" "}
              Please fill out form!
            </p>
          )}
          {success && (
            <p style={{ textAlign: "center", color: "green" }}> Success!</p>
          )}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholer="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholer="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholer="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="verifyPassword">
              <Form.Label>Verify Password</Form.Label>
              <Form.Control
                type="password"
                placeholer="Verify password"
                value={verifyPassword}
                onChange={(e) => setVerifyPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
              <br></br>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        </Col>

        <Col md={9}>
          <h2>My Orders</h2>
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
