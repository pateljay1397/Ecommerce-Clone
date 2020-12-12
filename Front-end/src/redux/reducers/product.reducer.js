import { productConstants } from "../actions/constants";

const initState = {
  products: [],
  productsByPrice: {
    under$300: [],
    under$1000: [],
    under$1500: [],
    under$2000: [],
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case productConstants.GET_PRODUCTS_BY_SLUG_REQUEST:
      state = {
        ...state,
        products: action.payload.products,
        productsByPrice: {
          ...action.payload.productsByPrice,
        },
      };
      break;
  }
  return state;
};
