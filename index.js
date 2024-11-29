const express = require('express');
const axios = require('axios');
const cors = require ('cors');

const app = express();
app.use (cors());

app.get("/pairs", async function (req,res){
    const url ="https://api.coindcx.com/exchange/v1/markets_details"
    const response = await axios.get(url);
    const data = response["data"];
    const pairs = data.map((coin)=> coin["pair"]);
    res.send(pairs);
});

app.listen(3000, ()=>{
    console.log("crypto backend server strated at port 3000....")
});