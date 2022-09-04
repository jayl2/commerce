import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { useParams } from "react-router-dom";
import axios from 'axios'

const ProductScreen = (props) => {
  let { id } = useParams();

const [product, setProduct]=useState({})

useEffect(()=>{
  const fetchProduct = async () => {
    const res = await axios.get(`/api/products/${id}`)
    console.log(res.data)

    setProduct(res.data)
  }
 fetchProduct()
},[])

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
