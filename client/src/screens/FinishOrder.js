import { Row, Col } from "react-bootstrap";
import Message from "../components/Message";

const FinishOrder = () => {
  const today = new Date().toLocaleDateString();
  const time =
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();
  console.log(time);

  return (
    <div>
      <Row style={{ margin: "auto", marginTop: "10rem" }}>
        <Col>
          <Message>
            Your Order has been submitted on {today} at {time}
          </Message>
        </Col>
        <Row>
          <Message variant="success">
            {" "}
            Your Order will be available in 1-2 Hours. Thank you!
          </Message>
        </Row>
      </Row>
    </div>
  );
};

export default FinishOrder;
