import React, { useContext } from "react";
import Hero from "../components/Hero";
import Products from "../components/ProductsPanel";
import Service from "../components/Service";
import Subscribe from "../components/Subscribe";
import Title from "../components/Title";

const Home = () => {
  return (
    <>
      <Hero />
      <Products start={0} end={10} title={"latest collections"} />
      <Products bestseller={true} title={"best sellers"} />
      <Service />
      <Subscribe />
    </>
  );
};

export default Home;
