import mongoose from "mongoose";
const AddressSchema = new mongoose.Schema(
  {
    houseNumber: {
      type: String,
      required: true,
    },
    fullAddress: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 500,
    },
    landmark: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Address = new mongoose.model("Order", AddressSchema);

export default Address;
