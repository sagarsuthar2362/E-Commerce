import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const currency = "$ ";
  const delivery_fees = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product, size) {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item._id === product._id && item.selectedSize === size
      );

      if (existing) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1, selectedSize: size }];
      }
    });
  }

  function removeFromCart(product) {
    setCartItems(
      cartItems.filter(
        (item) =>
          !(
            item._id === product._id &&
            item.selectedSize === product.selectedSize
          )
      )
    );
  }

  function updateQty(product, quantity) {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === product._id && item.selectedSize === product.selectedSize
          ? { ...item, quantity }
          : item
      )
    );
  }

  const price = cartItems.map((item) => item.price * item.quantity);
  const subtotal = price.reduce((acc, curr) => acc + curr, 0);

  // console.log("cart items", cartItems);

  const value = {
    products,
    currency,
    delivery_fees,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    removeFromCart,
    updateQty,
    cartItems,
    subtotal,
    price,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
