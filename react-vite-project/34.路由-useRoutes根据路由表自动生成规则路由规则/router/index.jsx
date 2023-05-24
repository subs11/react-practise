import { Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import News from "@/pages/Home/components/News";
import Game from "@/pages/Home/components/Game";
import Music from "@/pages/Home/components/Music";

const routes = [
  {
    path:"/",
    element:<Navigate to="/login" />
  },
  {
    path:"/login",
    element:<Login />,
  },
  {
    path:"/home",
    element:<Home />,
    children:[
      {
        path:"",
        element:<Navigate to="news" />,
      },
      {
        path:"news",
        element:<News />,
      },
      {
        path:"game",
        element:<Game />,
      },
      {
        path:"music",
        element:<Music />,
      },
    ]
  },
  {
    path:"/*",
    element:<NotFound />,
  },
];

export default routes;