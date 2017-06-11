const express = require('express');
const path = require('path');

var app = express();
    app.use(express.static(path.join(__dirname , '../public')));
const port = 3000;

app.get('/', (req, res)=>{
    res.render('index.html');
})


app.listen(port, ()=>{
    console.log(`server is running on port ${3000}`);
})

