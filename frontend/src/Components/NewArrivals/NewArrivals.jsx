import React, { useEffect, useState, forwardRef } from "react";
import "./NewArrivals.css";
import { Item } from "../Item/Item";

export const NewArrivals = forwardRef((props, ref) => {
  const [new_arrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newarrivals")
      .then((response) => response.json())
      .then((data) => setNewArrivals(data));
  }, []);

  return (
    <div className="new-arrivals" ref={ref}>
      <h1>NEW ARRIVALS</h1>
      <hr />
      <div className="arrivals">
        {new_arrivals.map((item, i) => {
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
        })}
      </div>
    </div>
  );
});
