import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Renting from './routes/renting';
import ErrorPage from './error-page';
import Calender from './routes/calender';
import Home from './routes/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "renting/",
    element: <Renting/>,
  },
  {
    path: "calender/",
    element: <Calender/>,
  },
  {
    path: "user/",
    element: <div>Bruger setting</div>,
    children:[
      {
        path: "userSettings/",
        element: <div>User setting</div>,
      },
      {
        path: "SchoolInfomation/",
        element: <div>User setting</div>,
      },
      {
        path: "Rentinghistory/",
        element: <div>User setting</div>,
      },

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
