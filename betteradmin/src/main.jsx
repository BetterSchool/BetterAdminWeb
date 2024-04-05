import ReactDOM from "react-dom/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/login";
import Renting from "./Pages/renting";
import Calender from "./Pages/calender";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header/Header";
import Profile from "./Pages/profile";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    element:<ProtectedRoute/>,
    children:[
      {
        path:"user/",
        element:<Header/>,
        children:[
          {
            path:"home/",
            element:<Home/>
          },
          {
            path:"calender/",
            element:<Calender/>
          },
          {
            path:"renting/",
            element:<Renting/>
          },
          {
            path:"profile/",
            element:<Profile/>
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <KindeProvider
      clientId='24b80be83e0d431e88a3221660fe5ce5'
      domain='https://betteradmin.kinde.com'
      redirectUri='http://localhost:5173'
      logoutUri='http://localhost:5173'
      >
    <RouterProvider router={router} />
    </KindeProvider>
);
