import mongoose from "mongoose";

export { Flight };
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const ticketSchema = new Schema(
  {
    seat: {
      type: String, 
      match: /[A-F][1-9]\d?/
    },
    price: { 
      type: Number,
      min: 0 
    },
  }
);

const flightSchema = new Schema(
  {
    airline: String,
    airport: { 
      type: String, 
      default: "DEN" 
    },
    flightNo: { 
      type: Number, 
      min: 10, 
      max: 9999 
    },
    departs: { 
      type: Date, 
      default: new Date(Date.now() + 365*24*60*60*1000)
    },
    tickets: [ticketSchema],
    destinations:[{type: Schema.Types.ObjectId, ref: 'Destination'}]
  },
  {
    timestamps: true,
  }
);

// Compile the schema into a model and export it
const Flight = mongoose.model("Flight", flightSchema);
