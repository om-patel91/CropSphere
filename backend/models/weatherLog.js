import mongoose from "mongoose";

const weatherLogSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  city: String,
  temperature: Number,
  humidity: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("WeatherLog", weatherLogSchema);