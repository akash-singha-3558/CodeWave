import {io} from "socket.io-client";
// require("dotenv").config()
export const initSocket=async()=>{
   
  const options={
    
        forceNew: true,
        reconnection: true,
        reconnectionAttempts: 3,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        randomizationFactor: 0.5,
        timeout: 20000,
        transports: ['websocket']  
  };
  //return instance of socket
  
  return io(`${process.env.REACT_APP_BACKEND_URL}`,options) 
}