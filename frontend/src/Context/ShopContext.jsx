import React, { createContext, useState } from "react";
import products from "../Components/Assets/products";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  products.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        if (itemInfo.new_price !== null) {
          totalAmount += itemInfo.new_price * cartItems[item];
        } else {
          totalAmount += itemInfo.old_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const getCategoryCount = (category) => {
    let totalProducts = 0;
    for (const item of products) {
      if (item.category === category) {
        totalProducts += 1;
      }
    }
    return totalProducts;
  };

  const getProductCount = () => {
    return products.length;
  };

  const contextValue = {
    getProductCount,
    getCategoryCount,
    getTotalCartItems,
    getTotalCartAmount,
    products,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
