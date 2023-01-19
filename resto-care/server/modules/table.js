import  { Schema, model } from "mongoose";

const tableSchema = new Schema({
    tableNumber: Number,
    occupied: Boolean,
    occupied: String,
})

const Table = model('Table',tableSchema);

export default Table;