import { useEffect } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderActions.js";

const PlaceOrderPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  console.log(cart);
  console.log(cart.paymentMethod);

  cart.itemsPrice = cart.cartItems
    .reduce(
      //calculating price
      (acc, item) => acc + item.price * item.qty,
      0
    )
    .toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
    }
  }, [navigate, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.carItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
      })
    );
    navigate("/finish");
  };

  return (
    <div>
      <Row>
        <Col md={7}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2> Purchase Options</h2>
              <b>Method: </b>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2> Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <h3> Your cart is empty</h3>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        {/* <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col> */}
                        <Col md={4}>{item.qty}</Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4} className="ms-auto">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2> Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup>
                <ListGroup.Item>{error && { error }}</ListGroup.Item>
              </ListGroup>
              <Button
                type="button"
                className="btn-block"
                onClick={placeOrderHandler}
              >
                Place Order
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PlaceOrderPage;
