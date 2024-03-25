import axios from "axios";
import { fetchProductsFailure, fetchProductsStart, fetchProductsSuccess } from "../redux/api/Api";
  
  export const fetchProducts = () => async (dispatch) => {
    dispatch(fetchProductsStart());
    try {
      const response = await axios.get("http://localhost:8001/api/product/");
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
  