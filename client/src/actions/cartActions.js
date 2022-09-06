import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const res = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: res.data.id,
      name: res.data.name,
      image: res.data.name,
      price: res.data.price,
      countInStock: res.data.countInStock,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.,cartItems))
};
