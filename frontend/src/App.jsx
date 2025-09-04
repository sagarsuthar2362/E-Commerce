import React from "react";
import { Routes, Route } from "react-router-dom";

// navbar
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import Collections from "./pages/Collection";
import About from "./pages/About";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import PlaceOrder from "./pages/PlaceOrder";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="lg:px-28 px-8 py-3 space-y-6">
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/place-order" element={<PlaceOrder />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
