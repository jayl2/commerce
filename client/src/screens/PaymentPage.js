import { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../actions/cartActions";


const PaymentPage = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if(!shippingAddress){
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal');


  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <div>
      <FormContainer>
        <CheckoutSteps s1 s2 s3/>
        <h1> Payment Method </h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as='legend'> Select Method</Form.Label>
          
          <Col>
            <Form.Check type='radio' 
                        label='PayPal or Credit Card' 
                        id='PayPal' 
                        name='paymentMethod' 
                        value='PayPal' 
                        checked 
                        onChange={(e)=> setPaymentMethod(e.target.value)}>
                </Form.Check>
                {/* <Form.Check 
                        type='radio' 
                        label='Stripe' 
                        id='Stripe' 
                        name='paymentMethod' 
                        value='Stripe' 
                        onChange={(e)=> setPaymentMethod(e.target.value)}>
                </Form.Check> */}
          </Col>
          </Form.Group>
          <Col><br></br></Col>
          <Button type="submit" variant="primary">
            Continue
          </Button>
       
        </Form>
      </FormContainer>
    </div>
  );
};

export default PaymentPage;
