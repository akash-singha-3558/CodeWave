import React from 'react'
import {Route,Routes} from "react-router-dom"
import EditorPage from '../pages/EditorPage'
import Home from '../pages/Home'
const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/editor/:roomId" element={<EditorPage/>}/>
   </Routes>
  )
}

export default AllRoutes