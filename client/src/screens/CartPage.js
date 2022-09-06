import React from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";

const CartPage = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let location = useLocation();

  //   parsing quantity to only the qty
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log(typeof qty);
  console.log(qty);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  return <div>CartPage</div>;
};

export default CartPage;
