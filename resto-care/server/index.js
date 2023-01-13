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

    if(!name) emptyFields.push('name');  //two inputs jar blank astil tar he function donhi pan dakhwte
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

    /*
    if (!name) {                            //je input blank ahe te te dakhwto
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
    } */

    //validatiion to check if all fields are filled ends here 

    //validation to check if email already exists starts here
    const existingUser = await User.findOne({ email: email});
    if (existingUser) {
        return res.json({
            success: false,
            message: "Email already exists"
        })
    }

    //validation to check phone already exists starts here 
    const existingUserPhone = await User.findOne({phone: phone});
    if (existingUserPhone) {
        return res.json({
            success:false,
            message: "phone aleready exists"
        })
    }
    //valistion to check if phone already exists ends here 

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


app.post('/login', async(req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.json({ 
            success: false,
            message: "Email and password are required"
        })
    }

    const existingUser = await User.findOne({ email: email, password: password });

    if(existingUser) {
        return res.json({ 
        success: true,
        message: "Login successful",
        data: existingUser
    })
  }//shubhamlondhe@g5mail.com
  else {
    return res.json({
        success: false,
        message: "Invalid email or password"
    })
  }


})

//api routes ends here
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

})

