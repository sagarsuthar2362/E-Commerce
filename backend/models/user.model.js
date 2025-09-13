import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  },
  { minimize: false }
);

const User = mongoose.model("User", userSchema);
export default User;
