import React from "react";
import Layout from "../../components/Layout";
import getParams from "../../utils/getParams";
import ProductPage from "./ProductPage";
import ProductStore from "./ProductStore";
import "./style.css";
import { useLocation } from "react-router-dom";
// import queryString from "query-string";

const ProductListPage = (props) => {
  const location = useLocation();
  // const queryParams = queryString.parse(location.search);

  const renderProduct = () => {
    console.log("ProductList props", props);
    const params = getParams(location.search);
    console.log("Params", params);
    let content = null;
    switch (params.type) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...params} />;
        break;
      default:
        content = null;
    }
    return content;
  };
  return <Layout>{renderProduct()}</Layout>;
};

export default ProductListPage;
