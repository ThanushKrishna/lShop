const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/index_routes');
const app = express();

app.listen(8080, ()=> {
    console.log("Application is started on 8080");
})

mongoose.connect("monogdb://localhost/lshop")
.then((res) => {
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log(err);
})

app.use('/lshop', route);
