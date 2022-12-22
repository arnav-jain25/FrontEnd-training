const { default: mongoose } = require("mongoose"); //to connect to the database on mongodb
require('dotenv').config(); // to hide user credentials

// const connectionParams = {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ilc8rjq.mongodb.net/?retryWrites=true&w=majority`

const link = mongoose.connect(uri).then(() => console.log('connected to mongodb atlas')).catch((err) => console.log(err));

module.exports = link