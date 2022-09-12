import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../actions/productActions";

const Home = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1> All Products</h1>
      <h3>
        {" "}
        <b>Cameras</b>
      </h3>
      {loading ? (
        <h2 style={{ textAlign: "center" }}>Please wait...</h2>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products
            .filter((product) => product.category === "Cameras")
            .map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
        </Row>
      )}
      <h3> Lenses</h3>
      <Row>
        {products
          .filter((product) => product.category === "Lens")
          .map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
      )}
    </div>
  );
};

export default Home;
