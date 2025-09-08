import React, { useContext, useEffect } from "react";
import Hero from "../components/Hero";
import Products from "../components/ProductsPanel";
import Service from "../components/Service";
import Subscribe from "../components/Subscribe";
import Title from "../components/Title";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    toast.success(location.state?.successMessage, {
      theme:"dark"
    });
  }, [location.state]);

  return (
    <>
      <ToastContainer />
      <Hero />
      <Products start={0} end={10} title={"latest collections"} />
      <Products bestseller={true} title={"best sellers"} />
      <Service />
      <Subscribe />
    </>
  );  
};

export default Home;
