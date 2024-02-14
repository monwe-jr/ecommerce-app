import React from "react";
import "./ProductDisplay.css";

export const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          {product.new_price !== null ? (
            <>
              <div className="productdisplay-right-prices-line-through">
                ${product.old_price}
              </div>
              <div className="productdisplay-right-item-price">
                ${product.new_price}
              </div>
            </>
          ) : (
            <div className="productdisplay-right-item-price">
              ${product.old_price}
            </div>
          )}
        </div>
        <div className="productdisplay-right-description">
          Good gaming product
        </div>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};
