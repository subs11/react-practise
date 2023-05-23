import React from 'react'
import { Routes, Route, Navigate} from "react-router-dom"
import Login from "@/pages/Login"
import Home from "@/pages/Home"
import NotFound from './pages/404'
import News from './pages/Home/components/News'
import Game from './pages/Home/components/Game'
import Music from './pages/Home/components/Music'
export default function App() {
  return (
    <div>
      <Routes>
        {/* 默认路由 */}
        <Route path='/' element={<Navigate to="/login" />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}>


        <Route path='' element={<Navigate to="news" />}></Route>
        <Route path='news' element={<News />}></Route>
        <Route path='game' element={<Game />}></Route>
        <Route path='/home/music' element={<Music />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}
