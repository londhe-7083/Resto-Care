import { Schema, model } from "moongoose";

const orderSchema = new Schema({
    orderId: String,
    tableNumber: Number,
    userId: {
        type: Schema,Type,Object,
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