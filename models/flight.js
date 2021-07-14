import mongoose from "mongoose";

export { Flight }
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema(
  {
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
  },
  {
    timestamps: true,
  }
);

// Compile the schema into a model and export it
const Flight = mongoose.model("Flight", flightSchema);
