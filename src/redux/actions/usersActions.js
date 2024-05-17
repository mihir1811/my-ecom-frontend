import axios from "axios";

const GET_USER_DATA = 'GET_USER_DATA';

export const fetchUsers = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('/api/products');
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
      }
    };
  };