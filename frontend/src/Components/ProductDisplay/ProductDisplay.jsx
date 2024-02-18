import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
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
          {product.description}
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
