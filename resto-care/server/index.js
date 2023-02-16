// index.js is main file of our project
import express from 'express';  //imported three libraries
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


import User from './modules/User.js';
import FoodItem from './modules/FoodItem.js';
import Table from './modules/Table.js';
import Order from './modules/Order.js';


const app = express();
app.use(express.json()); // passed midel wear of express.json

const PORT = process.env.PORT || 5000;  // to read environement file port or print 5000
mongoose.set("strictQuery",false);


mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Connected to MongoDB');    // connection of mongoDB
})

//api routes starts here

app.post('/signup', async (req, res) => {
    const { name, phone, email, password, role } = req.body;

    const emptyfields = [];
    
    if (!name) emptyfields.push('name');  //two inputs jar blank astil tar he function donhi pan dakhwte
    if (!phone) emptyfields.push('phone');
    if (!email) emptyfields.push('email');
    if (!password) emptyfields.push('password');
    if (!role) emptyfields.push('role');

    if (emptyfields.length > 0) {
        return res.json({
            success: false,
            message: `${emptyfields.join(' , ')} are required`
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

    const saveUser = await User.save();

    res.json({
        success: true,
        message: "User created successfully",
        data: saveUser
    })
})


app.post('/login', async(req, res) => {
    const { email, password } = req.body;

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
    }
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
app.get("/foodItemsByCategory", async (req, res) => {
    const { category } = req.query;

    const foodItems = await FoodItem.find({
        category: { $regex: title, $options: 'i' }
    })

    res.json(
        {
            success: true,
            message: "food Items fetched succesfully",
            data: foodItems
        })
})

//http://localhost:5000/foodItemsBy?title=paneer pizza
app.get("/foodItems", async (req, res) => {
    const { title } = req.query;

    const foodItems = await FoodItem.find({
        title: { $regex: title, $options: 'i' }
    })

    res.json({
        success: true,
        message: " food items fetched successfully",
        data: foodItems
    })
})

app.get("/allFoodItems", async (req, res) => {
    const foodItems = await FoodItem.find()
     
    res.json({
        success: true,
        message: " Food Items fetched successfully",
        data: foodItems
    })
})

app.post("/createTable", async (req, res) => {
    const { tableNumber } = req.body;

    const existingTable = await Table.findOne({ tableNumber: tableNumber });
    if (existingTable) {
        return res.json({
            success: false,
            message: "table aleready exists"
        })
    }

    const table = new Table({
        tableNumber: tableNumber,
        occupied: false
    })


    const savedTable = await table.save();

    res.json({
        success: true,
        message: "table created succesfull",
        data: savedTable
    })
})

app.post("/booktable", async (req, res) => {
    const { tableNumber, userId } = req.body;

    const existingTable = await Table.findOne({ tableNumber: tableNumber });
    if (existingTable && existingTable.occupied) {
        return res.json({
            success: false,
            message: "table already occupied"
        })
    }
    if (existingTable) {
        existingTable.occupied = true;
        existingTable.occupiedBy = userId;
        await existingTable.save();
    }

    res.json({
        success: true,
        message: "table booked successfully",
        data: existingTable
    })

})

app.post("/unbookTable", async (req, res) => {

    const {tableNumber} = req.body;

    const existingTable = await Table.findOne({tableNumber: tableNumber });
    if(existingTable){

        existingTable.occupied = false;
        existingTable.occupiedBy = null;
        await existingTable.save();
    }  
res.json({
    success: true,
    message: "Table unbooked successfully",
    data: existingTable
})
    
});

app.get("/availableTable", async(req, res) =>{
    const availableTables = await Table.find({occupied: false});

    res.json({
        success: true,
        message:"Available tables fetched successfully",
        data: availableTables
    })
});

app.post("/orderFoodItems",async(req,res) => {
    const {userId, tableNumber, items} = req.body

    const totalOrders = await Order.countDocuments();
    const orderId = totalOrders + 1;

    const order = new Order({
        orderId: orderId,
        userId: userId,
        tableNumber: tableNumber,
        items: items
        })

    const saveOrder = await order.save();
    
    res.json({
        success: true,
        message: "Order placed successfully",
        data: saveOrder
    })
})

//api routes ends here

app.listen(PORT, () => {              // app is listen for a specific port
    console.log(`Server is running on port ${PORT}`);

})



