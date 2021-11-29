const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
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

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running..");
});