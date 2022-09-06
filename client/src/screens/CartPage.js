import React from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";

const CartPage = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let location = useLocation();
  const removeFromCartHandler = (id) => {
    console.log("remove");
  };

  //   parsing quantity to only the qty
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log(typeof qty);
  console.log(qty);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const { cartItems } = cart;
  console.log(cartItems, "this is cart items");
  console.log(cartItems[0].product, "this undeffffined?");

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  return (
    <div>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Cart is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {/* mapping through quantity counts */}
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="danger"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="fa-sharp fa-solid fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={2}></Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};

export default CartPage;
