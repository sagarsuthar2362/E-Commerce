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
import UserLayout from "./components/UserLayout";
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./components/AdminLayout";
import AddProduct from "./components/AddProduct";
import ListProducts from "./components/ListProducts";
import AdminOrders from "./components/AdminOrders";

const App = () => {
  return (
    <div>
      {/* home route */}
      <Routes>
        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />

        {/* collection route */}
        <Route
          path="/collection"
          element={
            <UserLayout>
              <Collections />
            </UserLayout>
          }
        />

        {/* about page route */}
        <Route
          path="/about"
          element={
            <UserLayout>
              <About />
            </UserLayout>
          }
        />
        {/* product page route */}
        <Route
          path="/product/:productId"
          element={
            <UserLayout>
              <Product />
            </UserLayout>
          }
        />
        {/* cart page route */}
        <Route
          path="/cart"
          element={
            <UserLayout>
              <Cart />
            </UserLayout>
          }
        />
        {/* orders page route */}
        <Route
          path="/orders"
          element={
            <UserLayout>
              <Orders />
            </UserLayout>
          }
        />
        {/* contact page route */}
        <Route
          path="/contact"
          element={
            <UserLayout>
              <Contact />
            </UserLayout>
          }
        />
        {/* place order page route */}
        <Route
          path="/place-order"
          element={
            <UserLayout>
              <PlaceOrder />
            </UserLayout>
          }
        />
        {/* login/signup page route */}
        <Route
          path="/login"
          element={
            <UserLayout>
              <Login />
            </UserLayout>
          }
        />

        {/* admin login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* admin dashboard */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="add" element={<AddProduct />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
