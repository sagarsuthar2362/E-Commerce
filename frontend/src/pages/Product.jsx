import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import RelatedItem from "../components/RelatedItem";
import { toast, ToastContainer } from "react-toastify";

const Product = () => {
  const { products, currency, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const productToDisplay = products.find((item) => item._id === productId);

  return productToDisplay ? (
    <>
      <ToastContainer />
      <div className="mt-12">
        <div className="flex sm:flex-row flex-col text-2xl gap-8">
          {/* left div */}
          <div className="flex sm:flex-row flex-col-reverse md:w-6/12 gap-5">
            <div className="flex sm:flex-col gap-5 md:justify-between">
              {productToDisplay.image.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="md:h-[9rem] h-[6rem] w-full cursor-pointer object-contain"
                  onClick={() => setImage(image)}
                />
              ))}
            </div>
            <div>
              <img
                src={image || productToDisplay.image[0]}
                alt=""
                className="lg:h-[40rem] sm:h-[25rem] object-cover w-full"
              />
            </div>
          </div>

          {/* right div */}
          <div className="lg:w-5/12 w-full flex flex-col gap-5">
            <h1>{productToDisplay.name}</h1>
            <span className="font-semibold">
              {currency}
              {productToDisplay.price}
            </span>

            {/* product rating */}
            <div className="flex items-center">
              <img src={assets.star_icon} alt="" className="w-4 " />
              <img src={assets.star_icon} alt="" className="w-4 " />
              <img src={assets.star_icon} alt="" className="w-4" />
              <img src={assets.star_icon} alt="" className="w-4" />
              <img src={assets.star_dull_icon} alt="" className="w-4" />
              <p className="pl-2 text-[1rem]">(122)</p>
            </div>

            <p className="text-lg text-gray-500">
              {productToDisplay.description}
            </p>

            {/* size selector */}
            <div>
              <p className="text-[1.2rem]">select size</p>
              <div className="flex gap-3 mt-2 text-[1rem]">
                {productToDisplay.sizes?.map((i) => (
                  <span
                    className={`h-10 w-10 cursor-pointer flex items-center justify-center bg-gray-100 border border-gray-200 text-gray-900 ${
                      size === i ? "border-orange-500" : ""
                    }`}
                    key={i}
                    onClick={() => setSize(i)}
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>

            <button
              className="uppercase bg-black px-7 py-3 text-white w-fit text-[1rem] cursor-pointer mt-3"
              onClick={() => {
                if (!size) {
                  toast.error("Select Product Size");
                } else {
                  addToCart(productToDisplay, size);
                }
              }}
            >
              Add to cart
            </button>

            <hr />

            <div>
              <p className="text-gray-500 text-sm">100% Original product.</p>
              <p className="text-gray-500 text-sm">
                Cash on delivery is available on this product.
              </p>
              <p className="text-gray-500 text-sm">
                Easy return and exchange policy within 7 days.
              </p>
            </div>
          </div>
        </div>
      </div>

      <RelatedItem
        category={productToDisplay.category}
        subCategory={productToDisplay.subCategory}
      />
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Product;
