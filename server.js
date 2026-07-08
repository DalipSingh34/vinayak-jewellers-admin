const app = require("./app");
const db = require("./config/db.js");
const dotenv = require("dotenv");
dotenv.config();

db();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
})