import Order from "../models/order.model.js";
import User from "../models/user.model.js";

export const placeOrder = async (req, res, next) => {
  const { address, phone, cartItems, amount, paymentMethod } = req.body;

  try {
    const userId = req.user.id;

    if (!address || !phone || !cartItems || !amount || !paymentMethod) {
      throw { status: 400, message: "Incomplete fields" };
    }
    const orderItem = await Order.create({
      userId,
      address,
      phone,
      items: cartItems,
      amount,
      paymentMethod,
      date: Date.now(),
    });

    await User.findByIdAndUpdate(userId, {
      $push: { orders: orderItem._id },
    });

    res.status(201).json({
      message: "order placed",
    });
  } catch (error) {
    next(error);
  }
};

export const allOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      message: "Orders fetched successfully",
      orders,
    });
  } catch (error) {
    next(error);
  }
};

export const updateOrderStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    console.log(id, status);

    const updated = await Order.findByIdAndUpdate(id, { status });
    res.status(200).json({
      message: "Order status updated successfully",
      updated,
    });
  } catch (error) {
    next(error);
  }
};

export const myOrders = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate("orders");

    if (!user) {
      throw { message: "User not found", status: 404 };
    }

    res.status(200).json({
      message: "User fetched successfully",
      orders: user.orders,
    });
  } catch (error) {
    next(error);
  }
};
