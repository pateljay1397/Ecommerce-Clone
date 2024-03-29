import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../redux/actions";
import "./style.css";
import { generatePublicUrl } from "../../../urlConfig";
import { Link } from "react-router-dom";
import Card from "../../../components/UI/Card";
import { Fragment } from "react";

const ProductStore = (props) => {
  const product = useSelector((state) => state.product);
  const [priceRange, setPriceRange] = useState({
    under$300: 300,
    under$1000: 1000,
    under$1500: 1500,
    under$2000: 2000,
    above$2000: 2001,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <Card
            headerLeft={`${props.match.params.slug} mobile under CAD ${priceRange[key]}`}
            headerRight={<button>View all</button>}
            style={{ width: "calc(100% - 40px)", margin: "20px" }}
            key={index}
          >
            <div style={{ display: "flex" }}>
              {product.productsByPrice[key].map((product) => (
                <Link
                  to={`/${product.slug}/${product._id}/p`}
                  style={{
                    display: "block",
                  }}
                  className="productContainer"
                >
                  <div className="productImgContainer">
                    <img
                      src={generatePublicUrl(product.productPictures[0].img)}
                      alt=""
                    />
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: "5px 0", fontWeight: "bold" }}>
                      {product.name}
                    </div>
                    <div>
                      <span>4.3</span>&nbsp;
                      <span>500</span>
                    </div>
                    <div className="productPrice">CAD ${product.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        );
      })}{" "}
    </Fragment>
  );
};

export default ProductStore;
