import React from "react";
import "./Item.css";

export const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price">
          {props.new_price !== null ? `$${props.new_price}` : null}
        </div>
        <div
          className={
            props.new_price !== null
              ? "item-price with-line-through"
              : "item-price"
          }
        >
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};
