const express = require("express");
const errorMiddleware = require("./middleware/error");
const cookies = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const User = require("./models/userModel")

const app = express();
app.use(express.json());

app.use(cookies());

app.use(bodyParser.json({extended: true}));

app.use(express.urlencoded({extended: true}));

app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: ["POST", "GET"],
        credentials: true
    }));

// app.get("/", (req,res) => {
// })

app.get("/first", (req,res)=>{
    res.json("Hello");
    res.cookie('jwtoken',token, {
        path: '/',
        expires: new Date(Date.now() + 5*1000),
        httpOnly: true,
    }).send("cookie being initialized")
})

const port = process.env.PORT || 4000;

//Routes
const user = require("./routes/userRoutes");
app.use("/api/v1",user);

const emp = require("./routes/employeeRoutes");
app.use("/api/v1",emp);

const product = require("./routes/productRoutes");
app.use("/api/v1",product);

const order = require("./routes/orderRoutes");
app.use("/api/v1",order);

const feedback = require("./routes/feedbackRoutes");
app.use("/api/v1",feedback);

//Middleware for error
app.use(errorMiddleware);

module.exports = app;