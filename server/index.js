const express = require('express');
const path = require('path');
const request = require('request');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var options = {
    url : 'https://www.haloapi.com/profile/h5/profiles/halo123u/spartan',
    headers: {
        'Ocp-Apim-Subscription-Key': 'f02b6501d6d845dbb336dabf613d16f4'
    }

}
var spartanImg;
request(options, (err, res, body) => {
    spartanImg=res;
    console.log(spartanImg);
})

const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));
server.listen(3000);

app.get('/', (req, res)=>{
    res.sendFile('index.html');
});

io.on('connection', (socket)=>{

    socket.emit('news', { hello: spartanImg});
    socket.on('my other event', (data)=>{
        console.log(data);
    })
})
