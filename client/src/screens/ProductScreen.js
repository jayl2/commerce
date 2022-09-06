import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { useParams } from "react-router-dom";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";

const ProductScreen = (props) => {
  let { id } = useParams();

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <Link className="btn btn-dark my-3" to="/">
        Back
      </Link>
      {/* if loading, display loader */}
      {loading && <Loader />}
      <Row>
        <Col md={6} className="pic">
          <Image src={product.image} />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>

            {/* <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              ></Rating>
            </ListGroup.Item> */}

            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Decription: ${product.description}</ListGroup.Item>
          </ListGroup>
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
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "Instock" : "Not Available"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  variant="light"
                  disabled={product.countInStock === 0}
                >
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
