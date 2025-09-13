import { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title";

const AdminOrders = () => {
  const backendApi = import.meta.env.VITE_BACKEND_URL;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all orders
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${backendApi}/api/order/list`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setOrders(res.data.orders || []);
    } catch (error) {
      console.log("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update order status
  const updateOrderStatus = async (id, status) => {
    try {
      await axios.put(
        `${backendApi}/api/order/status/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      fetchOrders(); // refresh orders
    } catch (error) {
      console.log("Error updating status:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        Loading....
      </div>
    );

  return (
    <div>
      <Title text1={"all"} text2={"orders"} />

      {orders.length === 0 ? (
        <p className="text-center text-gray-500 py-5">No orders found</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-slate-100 border-b">
            <tr>
              <th className="p-2">Order Id</th>
              <th className="p-2">Address</th>
              <th className="p-2">Order Date</th>
              <th className="p-2">Payment Method</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((item) => (
              <tr key={item._id} className="border-b text-center">
                <td className="p-2">{item._id}</td>
                <td className="p-2 text-sm">
                  {item.address?.street}, {item.address?.city},{" "}
                  {item.address?.state}, {item.address?.zipcode},{" "}
                  {item.address?.country}
                </td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td className="p-2">{item.paymentMethod}</td>
                <td className="p-2">
                  <select
                    value={item.status}
                    onChange={(e) =>
                      updateOrderStatus(item._id, e.target.value)
                    }
                    className="border p-1 rounded"
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminOrders;
