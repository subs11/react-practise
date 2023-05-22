import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from "@/pages/Login"
import Home from "@/pages/Home"
import News from './pages/Home/components/News'
import Game from './pages/Home/components/Game'
import Music from './pages/Home/components/Music'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}>


        <Route path='news' element={<News />}></Route>
        <Route path='game' element={<Game />}></Route>
        <Route path='/home/music' element={<Music />}></Route>
        </Route>
      </Routes>
    </div>
  )
}
