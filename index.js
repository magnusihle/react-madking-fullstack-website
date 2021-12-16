const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoute = require("./routes/product");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const path = require('path');



const app = express();


dotenv.config();


mongoose
    .connect(
        process.env.MONGO_URL
    )
    .then(() => console.log("db connection successfull"))
    .catch((err) => console.log(err));


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);






// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, "./client")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});


app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running..");
});