import React, { useContext, useEffect, useState } from "react";
import { assets, products } from "../assets/frontend_assets/assets";
import ProductsCard from "../components/ProductsCard";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Collection = () => {
  const [showFilter, setshowFilter] = useState(false);
  const [category, setcategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState("Relavent");
  const { search } = useContext(ShopContext);

  

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory(category.filter((item) => item !== e.target.value));
    } else {
      setcategory([...category, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter((item) => item !== e.target.value));
    } else {
      setSubCategory([...subCategory, e.target.value]);
    }
  };


  useEffect(() => {
    let filtered = products;
    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (sortOption === "low_to_high") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "high_to_low") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    if (search.toLowerCase().trim()) {
      filtered = [...filtered].filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredProducts(filtered);
  }, [category, subCategory, sortOption, search]);

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      {/* filters */}
      <div className={`lg:min-w-60`}>
        <div className="flex items-center gap-2 cursor-pointer">
          <p>FILTERS</p>
          <button
            onClick={() => setshowFilter(!showFilter)}
            className="cursor-pointer"
          >
            <img
              className={`w-2 sm:hidden ${showFilter ? "rotate-90" : ""}`}
              src={assets.dropdown_icon}
              alt=""
            />
          </button>
        </div>

        <div className={`${showFilter ? "" : "hidden"} md:block md:mt-15`}>
          <div className={`border border-gray-300 pl-5 py-3 mt-6 `}>
            <p>CATEGORIES</p>

            <div className="space-y-2 mt-3 text-gray-500">
              <p className="flex items-center gap-1 text-lg ">
                <input
                  type="checkbox"
                  value={"Men"}
                  className="w-4 cursor-pointer"
                  onClick={(e) => toggleCategory(e)}
                />
                Men
              </p>

              <p className="flex items-center gap-1 text-lg ">
                <input
                  type="checkbox"
                  value={"Women"}
                  className="w-4 cursor-pointer"
                  onClick={(e) => toggleCategory(e)}
                />
                Women
              </p>

              <p className="flex items-center gap-1 text-lg ">
                <input
                  type="checkbox"
                  value={"Kids"}
                  className="w-4 cursor-pointer"
                  onClick={(e) => toggleCategory(e)}
                />
                Kids
              </p>
            </div>
          </div>

          {/* subcategory */}
          <div className="border border-gray-300 pl-5 py-3 mt-6">
            <p>TYPE</p>

            <div className="space-y-2 mt-3 text-gray-500">
              <p className="flex items-center gap-1 text-lg ">
                <input
                  type="checkbox"
                  value={"Topwear"}
                  className="w-4 cursor-pointer"
                  onClick={(e) => toggleSubCategory(e)}
                />
                Topwear
              </p>

              <p className="flex items-center gap-1 text-lg ">
                <input
                  type="checkbox"
                  value={"Bottomwear"}
                  className="w-4 cursor-pointer"
                  onClick={(e) => toggleSubCategory(e)}
                />
                Bottomwear
              </p>

              <p className="flex items-center gap-1 text-lg ">
                <input
                  type="checkbox"
                  value={"Winterwear"}
                  className="w-4 cursor-pointer"
                  onClick={(e) => toggleSubCategory(e)}
                />
                Winterwear{" "}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* products */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
       <Title text1={"all"} text2={"collections"}/>

          <div>
            <select
              name="price"
              id="price_filter"
              className="p-3 bg-gray-200 border-3 border-gray-400"
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="Relavent">sort by : Relavent</option>
              <option value="low_to_high">sort by : low to high</option>
              <option value="high_to_low">sort by : high to low</option>
            </select>
          </div>
        </div>

        {/* products */}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7">
          {filteredProducts.map((item) => (
            <ProductsCard
              key={item._id}
              _id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
