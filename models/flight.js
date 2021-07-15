import mongoose from "mongoose";

export { Flight };
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema(
  {
    airline: String,
    airport: { type: String, default: "DEN" },
    flightNo: { type: Number },
    departs: { type: Date, default: `${Date.now()}` },
  },
  {
    timestamps: true,
  }
);

// Compile the schema into a model and export it
const Flight = mongoose.model("Flight", flightSchema);
