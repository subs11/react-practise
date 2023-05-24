import React from 'react'
import { Routes, Route, Navigate} from "react-router-dom"
import routes from "@/router"
export default function App() {
  return (
    <div>
      <Routes>
        {/* 默认路由 */}
        {
          routes.map(item =>{
            return <Route key={item.path} path={item.path} element={item.element}>
              {
                
                item.children ? item.children.map(item=>{
                  return <Route key={item.path} path={item.path} element={item.element}></Route>
                }) : null
              }
              </Route>
          })
        }
      </Routes>
    </div>
  )
}
