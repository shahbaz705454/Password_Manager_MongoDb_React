const express = require("express");
const app = express();
require('dotenv').config();
const dbconnect = require('./Config/database');
const cors = require('cors')
const port = process.env.PORT || 7000;


// middlerware

app.use(express.json());

app.listen(port,()=>{
    console.log("Server started Successfully at port : ",port);
})
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

const route = require("./routes/route");

app.use('/api/',route);



dbconnect.dbConnect();



app.get('/',(req,resp)=>{
    resp.send(`<h1>Hello this is home page</h1>`);
})