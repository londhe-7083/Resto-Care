import {Schema,model} from "mongoose"

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    role: String,
},{ timestamps: true})


const User = model("User",userSchema)

export default User