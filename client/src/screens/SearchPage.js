import { useEffect, useState } from "react";
import Product from "../components/Product";
import Message from "../components/Message";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchs, setSearchs] = useState(false);

  const getSearchProduct = (id) => {
    navigate(`/product/${id}`);
    console.log("clikc");
    setSearchs(true);
  };

  const deleteProduct = async (_id) => {
    let res = await axios
      .delete(`api/products/${_id}`)
      .catch((error) => console.log(error));
    console.log(res);
  };

  const deleteRealTime = async (item) => {
    let index = products.indexOf(item);
    let items = [...products];
    items.splice(index, 1);
    setProducts(items);
  };

  const searchProducts = async () => {
    const res = await axios.get(`api/products`);
    setProducts(res.data);
    console.log(res);
  };
  useEffect(() => {
    searchProducts();
  }, []);

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

  return (
    <div>
      <div>
        <Col>
          <SearchBar setSearchs={setSearchs} />
          {filterProducts ? (
            <Row>
              {filteredProducts.map((product) => (
                <Col
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  key={product._id}
                  style={{
                    borderBottom: "solid 1.5px",
                  }}
                >
                  <p>
                    <b>{product.name}</b>
                  </p>
                  <p>Rating: {product.rating} / 5</p>
                  <p>${product.price}</p>
                  <img
                    style={{ width: "50%", cursor: "pointer" }}
                    src={product.image}
                    onClick={() => getSearchProduct(product._id)}
                  />
                  <Row>
                    <Button
                      style={{ width: "50%", margin: "20px" }}
                      onClick={() => {
                        deleteProduct(product._id);
                        deleteRealTime(product);
                      }}
                    >
                      Delete
                    </Button>
                  </Row>
                </Col>
              ))}
            </Row>
          ) : null}
        </Col>
      </div>
    </div>
  );
};

export default SearchPage;
