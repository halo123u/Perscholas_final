const express = require('express');
const path = require('path');
const request = require('request');
const rp = require('request-promise');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var spartanImg, emblem;
//Retrieves the spartan image from the Halo Api
var userGt = (gt)=>{
    var content = 'spartan'
    var options = {
    url : `https://www.haloapi.com/profile/h5/profiles/${gt}/${content}`,
    headers: {
        'Ocp-Apim-Subscription-Key': 'f02b6501d6d845dbb336dabf613d16f4'
    }

}
    request(options, (err, res, body) => {
        spartanImg=res.request.uri.href;
        console.log(spartanImg);
        
    });
    content = 'emblem';
    options.url =  `https://www.haloapi.com/profile/h5/profiles/${gt}/${content}`;
    console.log(options.url);     
    request(options, (err, res, body) => {
        console.log(emblem);
        emblem=res.request.uri.href;
    });
}

const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));
server.listen(3000);

app.get('/', (req, res)=>{
    res.sendFile('index.html');
});

io.on('connection', (socket)=>{
    console.log('client connected');
    socket.on('gt', (data)=>{
        userGt(data.gt);
        socket.emit('data', { Spartan : spartanImg,
    Emblem: emblem});
    });
    socket.on('connected', (data)=>{
        console.log(data);
    })
});
