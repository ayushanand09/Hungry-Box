const mongoose = require("mongoose");

// const connectDatabase = () => {
//     mongoose.connect(process.env.DB_URI,).then((data)=>{
//         console.log(`MongoDB connected with server: ${data.connection.host}`)
//         }).catch((err) => {
//             console.log(`Error while connection to database `,err)
//         })
// }

const connectDatabase = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-ujergxy-shard-00-00.xfsqjet.mongodb.net:27017,ac-ujergxy-shard-00-01.xfsqjet.mongodb.net:27017,ac-ujergxy-shard-00-02.xfsqjet.mongodb.net:27017/?ssl=true&replicaSet=atlas-suaazj-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database connected successsfully");
    } catch (error) {
        console.log(`Error while connecting with database`,error);
    }
}

module.exports = connectDatabase;