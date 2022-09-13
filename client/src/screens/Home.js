import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");

  const filterProducts = (products, query) => {
    if (!query) {
      return products;
    }
    return products.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.includes(query);
    });
  };

  const filteredProducts = filterProducts(products, query);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <div></div>
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
      <h3>
        {" "}
        <b>Lenses</b>
      </h3>
      <Row>
        {products
          .filter((product) => product.category === "Lens")
          .map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Home;
