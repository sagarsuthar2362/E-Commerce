import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
    const location = useLocation().pathname;
  
    

  if (showSearch && location === "/collection")
    return (
      <div className="my-5">
        <div className="flex items-center gap-2 justify-center">
          <div className="border border-gray-500 sm:w-5/12 w-ful flex items-center rounded-full px-2">
            <input
              type="text"
              name="search"
              placeholder="Search Items"
              className="rounded-full p-2 flex-grow outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
            <img
              src={assets.search_icon}
              alt=""
              className="h-8 p-1 cursor-pointer"
            />
          </div>

          <img
            src={assets.cross_icon}
            alt=""
            className="cursor-pointer"
            onClick={() => setShowSearch(false)}
          />
        </div>
      </div>
    );

  return null;
};

export default SearchBar;
