import {Schema, model} from 'mongoose';

const foodItemSchema = new Schema({
    title: String,
    description: String,
    imgUrl: String,
    price: Number,
    category: String})

    const FoodItem = model("FoodItem", foodItemSchema)
    export default FoodItem
