import mongoose from "mongoose";
export { Destination };

const Schema = mongoose.Schema;
const destinationSchema = new Schema(
    {
        airport: { 
            type: String,
            unique: true
        }
    }
);


// Compile the schema into a model and export it
const Destination = mongoose.model("Destination", destinationSchema);
