import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";
import { useParams } from "react-router-dom";

const ProductScreen = (props) => {
  let { id } = useParams();

  //item click to item description.
  const product = products.find((p) => p._id === id);
  console.log(product.name, "test");

  return (
    <div>
      <Link className="btn btn-dark my-3" to="/">
        Home
      </Link>
      <Row>
        <Col md={6} className="pic">
          <Image src={product.image} />
        </Col>

        <Col md={3}>
          <ListGroup.Item>
            <h4>{product.name}</h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating
              value={product.rating}
              text={`${product.numReviews} Reviews`}
            ></Rating>
          </ListGroup.Item>
          <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
          <ListGroup.Item>Decription: ${product.description}</ListGroup.Item>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <b>${product.price}</b>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                />
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "Instock" : "Not Available"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button className="btn-block" type="button" variant="light">
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
