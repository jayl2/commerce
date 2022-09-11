import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../actions/productActions";

const SortByName = () => {
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
            .sort((a, b) => (a.name > b.name ? 1 : -1))
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

export default SortByName;
