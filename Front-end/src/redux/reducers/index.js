import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";
import auhtReducer from "./auth.reducer";
const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  auht: auhtReducer,
});

export default rootReducer;
