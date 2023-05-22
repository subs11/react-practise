import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from "@/pages/Login"
import Home from "@/pages/Home"
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  )
}
