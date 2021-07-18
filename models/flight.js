import mongoose from "mongoose";

export { Flight };
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const ticketSchema = new Schema(
  {
    seat: {type: String, match: /[A-F][1-9]\d?/, required: true},
    price: { type: Number, min: 0, required: true },
  }
);

const flightSchema = new Schema(
  {
    airline: String,
    airport: { type: String, default: "DEN" },
    flightNo: { type: Number, min: 10, max: 9999 },
    departures: { type: Date, default: `${Date.now()}` },
    tickets: [ticketSchema]
  },
  {
    timestamps: true,
  }
);

// Compile the schema into a model and export it
const Flight = mongoose.model("Flight", flightSchema);
