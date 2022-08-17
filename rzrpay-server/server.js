const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const request = require('request');
const app = express();
app.use(cors());

const config = {
    RAZOR_PAY_KEY_ID: process.env.RAZOR_PAY_KEY_ID,
    RAZOR_PAY_KEY_SECRET: process.env.RAZOR_PAY_KEY_SECRET
}

app.listen(8000, () => {
    console.log("Server is listening at http://localhost:8000");
});


const instance = new Razorpay({
    key_id: config.RAZOR_PAY_KEY_ID,
    key_secret: config.RAZOR_PAY_KEY_SECRET,
});

app.get("/order/:amount", (req, res) => {
    try {
        const options = {
            amount: req.params.amount * 100,
            currency: "INR",
            receipt: "order_rcptid_11",
            payment_capture: 0,
        };
        instance.orders.create(options, function (err, order) {
            if (err) {
                return res.status(500).json({
                    message: "Something Went Wrong",
                });
            }
            return res.status(200).json(order);
        });
    } catch (err) {
        return res.status(500).json({
            message: "Something Went Wrong",
        });
    }
});

app.post("/capture/:paymentId/:amount", (req, res) => {
    try {
        return request(
            {
                method: "POST",
                url: `https://${config.RAZOR_PAY_KEY_ID}:${config.RAZOR_PAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
                form: {
                    amount: req.params.amount * 100,
                    currency: "INR",
                },
            },
            function (err, response, body) {
                if (err) {
                    return res.status(500).json({
                        message: "Something Went Wrong",
                    });
                }
                console.log("Status:", response.statusCode);
                console.log("Headers:", JSON.stringify(response.headers));
                console.log("Response:", body);
                return res.status(200).json(body);
            });
    } catch (err) {
        return res.status(500).json({
            message: "Something Went Wrong",
        });
    }
});