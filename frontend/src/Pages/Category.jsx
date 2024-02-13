import React, { useContext } from "react";
import "./CSS/Category.css";
import { ShopContext } from "../Context/ShopContext";

export const Category = (props) => {
  const { products } = useContext(ShopContext);
  return (
    <div className="category">
      <img src={props.banner} alt="" />
    </div>
  );
};
