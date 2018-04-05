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

    socket.emit('newEmail',{
        from:'mike@gmail.com',
        text:'Whats going on',
        createAt: '5:28 pm'
    });
    socket.emit('newMessage',{
        from:'yash@gmail.com',
        text:'Hey Vivek',
        createAt:'default'
    });
    socket.on('createMessage',(createMessage)=>{
        console.log('createMessage',createMessage)
    })
    socket.on('createEmail',(newEmail)=>{
        console.log('createEmail',newEmail)
    })

socket.on('disconnect',()=>{
    console.log('Disconnected');

})    
});



var port=process.env.PORT||3000;
server.listen(port);
console.log(`Server is running ${port}`);