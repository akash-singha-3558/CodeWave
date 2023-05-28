import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import logo from "../logo.png"
import ACTIONS from '../Actions'
import Client from '../components/Client'
import Editor from '../components/Editor'
import { initSocket } from '../socket'
import {useLocation,useNavigate,Navigate,useParams} from "react-router-dom"
const EditorPage = () => {
  const [clients,setClients]=useState([{socketId:1,userName:"Chuunu"},{socketId:2,userName:"Muunu"}])
  const socketRef=useRef(null);
  const location=useLocation();
  const reactNavigator = useNavigate(); //navigate
  const {roomId}=useParams();
// console.log("id",roomId)
useEffect(()=>{
 const init=async()=>{
  socketRef.current=await initSocket();
  socketRef.current.on("connect_error",(err)=>handleErrors(err));
  socketRef.current.on("connect_failed",(err)=>handleErrors(err));

  function handleErrors(e){
    console.log("socket error",e);
    toast.error("socket connect failed try again later");
    reactNavigator("/")
  }

  socketRef.current.emit(ACTIONS.JOIN,{
     roomId,
     userName:location.state?.userName
  });
  
 }
 
 init()
},[])

if(!location.state)
{
  return <Navigate to="/"/>
}


  return (
    <div className='editorPageParentWrapper'>
        <div className='leftBoxWrap'>
           <div className='leftBoxInnerWrap'>
               <div className='logo'>
                     <img className='editorLogoImage' src={logo}
          alt="code wave logo"/>
               </div>
               <h3>Connected</h3>
               <div className='clientsList'>
                  {
                    clients.map((client)=>(<Client userName={client.userName} key={client.socketId}/>))
                  }
               </div>
            </div>
            <button className='btn copyRoomIdBtn'>Copy ROOM ID</button>
            <button className='btn leaveBtn'>Leave</button>
        </div>


        <div className='rightBoxWrapEditor'>
          <Editor/>
        </div>
    </div>
  )
}

export default EditorPage