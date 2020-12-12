import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { getProdcutsBySlug } from "../../redux/actions";

const ProductListPage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const { match } = props;
    dispatch(getProdcutsBySlug(match.params.slug));
  }, []);
  return <Layout>ProductListPage</Layout>;
};

export default ProductListPage;
