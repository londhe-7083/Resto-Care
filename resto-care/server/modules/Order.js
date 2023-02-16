import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    orderId: String,
    tableNumber: Number,
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    items: [{
        name: String,
        price: Number,
        quantity: Number
    }]
})

const Order = model('Order', orderSchema);

export default Order;