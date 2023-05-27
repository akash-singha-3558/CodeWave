import React from 'react'
import { useState } from 'react'
import Client from '../components/Client'
import Editor from '../components/Editor'

const EditorPage = () => {
  const [clients,setClients]=useState([{socketId:1,userName:"Chuunu"},{socketId:2,userName:"Muunu"}])
  return (
    <div className='editorPageParentWrapper'>
        <div className='leftBoxWrap'>
           <div className='leftBoxInnerWrap'>
               <div className='logo'>
                     <img className='editorLogoImage' src="https://private-user-images.githubusercontent.com/112806398/241290781-cfdf6afe-ec2e-4686-94f9-c99d642012e0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg1MTI0MzE0LCJuYmYiOjE2ODUxMjQwMTQsInBhdGgiOiIvMTEyODA2Mzk4LzI0MTI5MDc4MS1jZmRmNmFmZS1lYzJlLTQ2ODYtOTRmOS1jOTlkNjQyMDEyZTAucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMDUyNiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzA1MjZUMTgwMDE0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YjMxY2Y3N2YzNGY5Y2EwYjYyM2MzZWQxYzg4YzMyMDZmMmNkYTQwNTk5YWU2ZWJlYjI4NTM4Y2M4ZDIwOTZhOCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.oOn73yVJ-0nRRJnjiCWv_Ur35WPIFN9cJbVmV4IQvxc"
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