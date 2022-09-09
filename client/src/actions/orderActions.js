import { ORDER_CREATE_REQUEST } from "../constants/orderConstants";
import { ORDER_CREATE_SUCCESS } from "../constants/orderConstants";
import { ORDER_CREATE_FAIL } from "../constants/orderConstants";
import axios from "axios";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo }, //gettin user info
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`, //headers sent with token
      },
    };

    const { data } = await axios.post(`/api/orders`, order, config); //destrc data from axios to pass in object

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data, //passing data
    });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
