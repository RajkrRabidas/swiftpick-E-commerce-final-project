const orderModel = require('../models/orderModel.js');
const userModel = require('../models/userModel.js');
const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// placing user order for frontend
const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5173";

    try {
        const userId = req.userId;  // Get the userId from the auth middleware
        console.log('User ID in placeOrder:', userId);

        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID not found." });
        }

        const newOrder = new orderModel({
            userId: userId,  // Use req.userId here, not req.body.userId
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(userId, { cartData: {} });  // Update the user's cart

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "usd",  // Use "usd" for US dollars
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100,  // Stripe expects amounts in cents
            },
            quantity: item.quantity,
        }));

        line_items.push({
            price_data: {
                currency: "usd",  // Use "usd" for US dollars
                product_data: {
                    name: "Delivery Charges",
                },
                unit_amount: 200,  // Example delivery charge in cents (e.g., $2.00)
            },
            quantity: 1,
        });

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: "payment",
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        });

        res.json({ success: true, session_url: session.url });
    } catch (error) {
        console.log("Order Placement Error:", error);
        res.status(500).json({ success: false, message: "Error placing order" });
    }
};

module.exports = placeOrder;
