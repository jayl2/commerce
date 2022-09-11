import { ORDER_CREATE_REQUEST } from "../types/orderTypes";
import { ORDER_CREATE_SUCCESS } from "../types/orderTypes";
import { ORDER_CREATE_FAIL } from "../types/orderTypes";
import { ORDER_DETAILS_REQUEST } from "../types/orderTypes";
import { ORDER_DETAILS_SUCCESS } from "../types/orderTypes";
import { ORDER_DETAILS_FAIL } from "../types/orderTypes";
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

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${id}`, config);

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data, //passing data
    });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
