const connectToMongo = require("./db");
connectToMongo();
const port = 5000;
const express = require("express");

const app = express();
var cors = require('cors')

app.use(cors());
app.use(express.json());

app.use("/api/auth" , require("./routes/auth"));

app.listen(port, ()=>{
    console.log(`Server satrted at port ${port} successfully`);
});