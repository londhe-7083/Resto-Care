import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './modules/User.js';
dotenv.config();


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Connected to MongoDB');
})

//api routes starts here

app.post('/signup', async (req, res) => {
    const { name, phone, email, password, role } = req.body;

    const emptyFields = [];

    if(!name) emptyFields.push('name');
    if(!phone) emptyFields.push('phone');
    if(!email) emptyFields.push('email');
    if(!password) emptyFields.push('password');
    if(!role) emptyFields.push('role');

    if(emptyFields.length > 0){
        return res.json({
            success: false,
            message: `${emptyFields.join(' & ')} are required`
        })
    }

    if (!name) {
        return res.json({
            success: false,
            message: "name is required"
        })
    }

    if (!phone) {
        return res.json({
            success: false,
            message: "Phone is required"
        })
    }

    if (!email) {
        return res.json({
            success: false,
            message: "email is required"
        })
    }

    if (!password) {
        return res.json({
            success: false,
            message: "password is required"
        })
    }

    if (!role) {
        return res.json({
            success: false,
            message: "role is required"
        })
    }

    const user = new User({
        name: name,
        phone: phone,
        email: email,
        password: password,
        role: role
    })

    const saveUser = await user.save();

    res.json({
        success: true,
        message: "User created successfully",
        data: saveUser
    })
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

})

