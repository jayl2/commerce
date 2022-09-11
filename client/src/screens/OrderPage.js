import { useEffect } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getOrderDetails } from "../actions/orderActions.js";

const OrderPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  useEffect(() => {
    dispatch(getOrderDetails(id));
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>{error}</h1>
  ) : (
    <div>
      <h1> Order {order._id} </h1>
      <Row>
        <Col md={7}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2> Purchase Options</h2>
              <b>Method: </b>
              {order.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2> Order Items</h2>
              {order.orderItems.length === 0 ? (
                <h3> No Orders</h3>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
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
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OrderPage;
