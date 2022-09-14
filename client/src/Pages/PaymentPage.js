import { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../actions/cartActions";

const PaymentPage = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState(null);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <div>
      <FormContainer>
        <h1> Purchase Options </h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend"> Select Method</Form.Label>

            <Col>
              <Form.Check
                type="radio"
                label="Pick up"
                id="Pickup"
                name="paymentMethod"
                value="Pickup"
                required
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
              <Form.Check
                type="radio"
                label="Delivery"
                id="Delivery"
                name="paymentMethod"
                value="Delivery"
                required
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
          </Form.Group>
          <Col>
            <br></br>
          </Col>
          <Button type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default PaymentPage;
