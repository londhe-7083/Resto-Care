import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './modules/User.js';
import FoodItem from './modules/FoodItem.js';
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

    if (!name) emptyFields.push('name');  //two inputs jar blank astil tar he function donhi pan dakhwte
    if (!phone) emptyFields.push('phone');
    if (!email) emptyFields.push('email');
    if (!password) emptyFields.push('password');
    if (!role) emptyFields.push('role');

    if (emptyFields.length > 0) {
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
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.json({
            success: false,
            message: "Email already exists"
        })
    }

    //validation to check phone already exists starts here 
    const existingUserPhone = await User.findOne({ phone: phone });
    if (existingUserPhone) {
        return res.json({
            success: false,
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


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            message: "Email and password are required"
        })
    }

    const existingUser = await User.findOne({ email: email, password: password });

    if (existingUser) {
        return res.json({
            success: true,
            message: "Login successful",
            data: "existingUser"
        })
    }//shubhamlondhe@g5mail.com
    else {
        return res.json({
            success: false,
            message: "Invalid email or password"
        })
    }
})

app.post("/createFoodItem", async (req, res) => {
    const { title, description, imgUrl, price, category } = req.body;

    const foodItem = new FoodItem({
        title: title,
        description: description,
        imgUrl: imgUrl,
        price: price,
        category: category
    })

    const savedFoodItem = await foodItem.save();

    res.json({
        success: true,
        message: "Food Item created successfully",
        data: savedFoodItem
    })
})

//http://localhost:5000/foodItemsByCategory?category=pizza
app.get("/foodItemsByCategory " , async(req, res)=> {
    const {category} = req.query;

    const foodItems = await FoodItem.find({
        category:{$regex: title, $options: 'i'}
    })

    res.json( 
        {
            success: true,
            message:"food Items fetched succesfully",
            data: foodItems
        })
})

//http://localhost:5000/foodItemsBy?title=paneer pizza
app.get("/foodItems",async(req,res)=>{
    const {title} = req.query;

    const foodItems = await FoodItem.find({
        title: {$regex: title, $options: 'i'}
    })

    res.json({
        success: true,
        message: " food items fetched successfully",
        data: foodItems
    })
})
//api routes ends here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

})



