const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database")


//Config
dotenv.config({path:"config/config.env"});

//Connecting to Database
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
connectDatabase(username,password);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})