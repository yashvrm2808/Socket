const express=require('express');
const path=require('path');
const http=require('http');//now we will create a server
const socketIO=require('socket.io');
const publicPath=path.join(__dirname ,'../public');
const app= express();

app.use(express.static(publicPath));
var server=http.createServer(app);//server
var io=socketIO(server);
io.on('connection',(socket)=>{
    console.log('New user connected');

socket.on('disconnect',()=>{
    console.log('Disconnected');
})    
});



var port=process.env.PORT||3000;
server.listen(port);
console.log(`Server is running ${port}`);