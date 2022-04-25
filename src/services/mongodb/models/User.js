import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: mongoose.Types.ObjectId,
      ref: "Address",
    },
  },
  {
    timestamps: true,
  }
);

const User = new mongoose.model("User", UserSchema);

export default User;
