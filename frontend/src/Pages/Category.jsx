import React, { useContext } from "react";
import "./CSS/Category.css";
import { ShopContext } from "../Context/ShopContext";
import drop_down from "../Components/Assets/drop-down.png";
import { Item } from "../Components/Item/Item";

export const Category = (props) => {
  const { products } = useContext(ShopContext);
  return (
    <div className="category">
      <img className="category-banner" src={props.banner} alt="" />
      <div className="category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 25 products
        </p>
        <div className="category-sort">
          Sort by <img className="drop-down" src={drop_down} alt="" />
        </div>
      </div>
      <div className="category-products">
        {products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="category-loadmore">Explore More</div>
    </div>
  );
};
