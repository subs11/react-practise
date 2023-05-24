import React from 'react'
import { Routes, Route, Navigate,useRoutes} from "react-router-dom"
import routes from "@/router"
export default function App() {
  // const result = useRoutes(routes);
  // console.log(result);
  return (
    <div>
      {/* {result} */}
    {useRoutes(routes)}
    </div>
  )
}
