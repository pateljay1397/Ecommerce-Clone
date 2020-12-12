import axios from "../../helpers/axios";
import { productConstants } from "./constants";

export const getProdcutsBySlug = (slug) => {
  return async (dispatch) => {
    const res = await axios.get(`/products/${slug}`);
    if(res.status===200){
        dispatch({
            type: productConstants.GET_PRODUCTS_BY_SLUG_REQUEST,
            payload: res.data
        })
    } else{
        // dispatch({
        //     type:
        // })
    }
//    console.log(res);
  };
};
