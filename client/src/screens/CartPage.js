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
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartPage = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let location = useLocation();

  //   parsing quantity to only the qty
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log(typeof qty);
  console.log(qty);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const { cartItems } = cart;
  console.log(cartItems, "this is cart items");

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    console.log("removed it");
  };

  const checkoutHandler = () => {
    console.log("checkout");
    navigate("/login?redirect=shipping");
  };

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
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  {/* reduce to accumulate quantity */}
                  Subtotal ({cartItems.reduce((acc, curr) => acc + curr.qty, 0)}
                  ) Items
                </h2>
                {/* reduce to accumulate price */}$
                {cartItems.reduce(
                  (acc, curr) => acc + curr.qty * curr.price,
                  0
                )}
              </ListGroup.Item>
              <ListGroup.Item className="d-grid gap-2">
                <Button
                  type="button"
                  className="btn-block"
                  variant="warning"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Check Out
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};

export default CartPage;
