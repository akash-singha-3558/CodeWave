const {Server}=require("socket.io");
const app=require("express")();
const server=require("http").createServer(app);
const cors = require('cors');
const ACTIONS=require("./Actions.js")
app.use(cors())
const io=new Server(server);
require("dotenv").config();

const userSocketMap={};

io.on("connection",(socket)=>{

console.log("socket",socket.id)

socket.on(ACTIONS.JOIN,(roomId,userName)=>{
userSocketMap[socket.id]=userName;
socket.join(roomId)
})

})




server.listen(process.env.PORT,()=>{
    console.log("conected",process.env.PORT)
})
 