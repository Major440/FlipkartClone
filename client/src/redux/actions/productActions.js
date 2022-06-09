import axios from "axios";
import * as action from "../constants/productConstants";

const url = '';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/products`);
        dispatch({ type: action.GET_PRODUCT_SUCCESS, payload: data });
    } catch (err) {
        dispatch({ type: action.GET_PRODUCT_FAIL, payload: err.response });
    }
};

export const getProductDetails = (id) =>async (dispatch) =>{
    try{
        const { data } = await axios.get(`${url}/product/${id}`);
        dispatch({ type: action.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
    } catch(err){
        dispatch({ type: action.GET_PRODUCT_DETAIL_FAIL, payload: err.response });
    }
}
