import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import SearchBar from "./SearchBar";

const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3 py-3 rounded cardd ">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" className="card-img" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title>
              <b>{product.name}</b>
            </Card.Title>
          </Link>

          {/* Ratings */}
          <Card.Text>
            <Rating
              value={product.rating}
              // text={`${product.numReviews} Reviews`}
            />
          </Card.Text>
          <Card.Text as="h5" className="my-2">
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
