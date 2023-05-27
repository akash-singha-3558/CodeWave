const {Server}=require("socket.io");
const app=require("express")();
const server=require("http").createServer(app);
const io=new Server(server);
require("dotenv");


io.on("connection",(socket)=>{
console.log("socket",socket.id)
})








server.listen(process.env.PORT,()=>{
    console.log("conected")
})
 