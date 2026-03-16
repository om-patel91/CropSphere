import mongoose from "mongoose";

const equipmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: String,

    pricePerDay: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      enum: ["tractor", "sprayer", "harvester", "rotavator"],
      required: true,
    },

    image: String,

    stock: {
      type: Number,
      default: 1,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Equipment", equipmentSchema);