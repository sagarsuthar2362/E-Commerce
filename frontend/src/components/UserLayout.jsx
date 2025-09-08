import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

const UserLayout = ({ children }) => {
  return (
    <div className="lg:px-28 px-8 py-3 space-y-6">
      <Navbar />
      <SearchBar />
      {children}
      <Footer />
    </div>
  );
};

export default UserLayout;
