import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const AddProducts = () => {
  const backendApi = import.meta.env.VITE_BACKEND_URL;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Men",
    subCategory: "Topwear",
    price: "",
    sizes: [],
    bestseller: false,
    image: [],
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, image: [...prev.image, files[0]] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Toggle sizes
  const toggleSize = (size) => {
    setFormData((prev) => {
      if (prev.sizes.includes(size)) {
        return { ...prev, sizes: prev.sizes.filter((s) => s !== size) };
      } else {
        return { ...prev, sizes: [...prev.sizes, size] };
      }
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      // form data
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append("subCategory", formData.subCategory);
      data.append("price", formData.price);
      data.append("bestseller", formData.bestseller);

      // append sizes array
      formData.sizes.forEach((size) => data.append("sizes[]", size));

      // append images
      formData.image.forEach((img, index) => {
        data.append(`image${index + 1}`, img);
      });

      // old promise ****************************************
      // let res = await axios.post(
      //   "http://localhost:3000/api/product/add",
      //   data,
      //   {
      //     "Content-Type": "multipart/form-data",
      //     headers: {
      //       Authorization: `Bearer ${localStorage.getItem("token")}`,
      //     },
      //   }
      // );
      // old promise ****************************************

      await toast.promise(
        axios.post(`${backendApi}/api/product/add`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }),
        {
          pending: "Adding Product...",
          success: {
            render({ res }) {
              return res?.data?.message || "Product added succesfully";
            },
            theme: "dark",
          },
          error: {
            render({ res }) {
              return (
                res?.response?.data?.message ||
                "Something went wrong try again later"
              );
            },
            theme: "dark",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="lg:w-5/12 space-y-3"
        encType="multipart/form-data"
      >
        {/* image upload */}
        <div className="space-y-2">
          <h2 className="text-gray-700">Upload image</h2>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="relative h-20 w-20 cursor-pointer border rounded"
              >
                <img
                  src={assets.upload_area}
                  className="h-full w-full object-cover"
                  alt="upload"
                />
                <input
                  type="file"
                  name={`image${num}`}
                  id={`image${num}`}
                  className="absolute top-0 left-0 border w-full h-full opacity-0"
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
        </div>

        {/* product name */}
        <div className="w-full">
          <h3 className="text-gray-700">Product name</h3>
          <input
            type="text"
            name="name"
            className="border border-gray-300 rounded-sm outline-none w-full p-2"
            placeholder="Type here"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* product description */}
        <div className="w-full">
          <h3 className="text-gray-700">Product description</h3>
          <textarea
            name="description"
            className="border border-gray-300 rounded-sm outline-none w-full p-2"
            placeholder="Type here"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* category and subCategory & price */}
        <div className="flex items-end gap-8">
          {/* category */}
          <div className="w-full">
            <p className="text-gray-700 mb-2">Product category</p>
            <select
              name="category"
              className="border border-gray-400 outline-none rounded-sm text-gray-600 p-1 w-full"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          {/* sub category */}
          <div className="w-full">
            <p className="text-gray-700 mb-2">Sub category</p>
            <select
              name="subCategory"
              className="border border-gray-400 outline-none rounded-sm text-gray-600 p-1 w-full"
              value={formData.subCategory}
              onChange={handleChange}
            >
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          {/* product price */}
          <div className="w-full">
            <p className="text-gray-700">Product price</p>
            <input
              type="number"
              name="price"
              className="border border-gray-400 rounded-sm p-1 w-full"
              placeholder="25"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* product sizes */}
        <div>
          <p className="text-gray-700 mb-2">Product sizes</p>
          <div className="flex gap-3">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size} onClick={() => toggleSize(size)}>
                <p
                  className={`px-3 py-1 cursor-pointer rounded ${
                    formData.sizes.includes(size)
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {size}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* bestsellers */}
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            name="bestseller"
            id="bestseller"
            checked={formData.bestseller}
            onChange={handleChange}
          />
          <label htmlFor="bestseller" className="text-gray-600">
            Add to bestseller
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-black px-12 py-2 cursor-pointer rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
