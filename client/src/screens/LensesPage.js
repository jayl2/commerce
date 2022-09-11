import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../actions/productActions";

const LensesPage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h4> Sort: A - Z</h4>
      {loading ? (
        <h2 style={{ textAlign: "center" }}>Please wait...</h2>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products
            .filter((product) => product.category === "Lens")
            .map((filteredProduct) => (
              <Col key={filteredProduct._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={filteredProduct} />
              </Col>
            ))}
        </Row>
      )}
    </div>
  );
};

export default LensesPage;
