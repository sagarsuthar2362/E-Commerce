import axios from "axios";
import React, { useEffect, useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import { toast, ToastContainer } from "react-toastify";

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      let res = await axios.get("http://localhost:3000/api/product/all");
      setProducts(res.data.allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/product/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res);
      toast.success(res.data?.message, {
        theme:"dark"
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data?.message || "Network error");
    }
  };

  useEffect(() => {
    fetchData();
  }, [handleDelete]);

  return (
    <div>
      <ToastContainer />
      <p>All product list</p>
      <table className="w-full">
        <thead className="text-left bg-gray-200">
          <tr>
            <th className="p-2">Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr>
              <td className="p-2">
                <img src={item.image[0]} className="w-18 h-18 object-cover" />
              </td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>
                <p
                  className="text-red-500 cursor-pointer text-2xl"
                  onClick={() => handleDelete(item._id)}
                >
                  X
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProducts;
