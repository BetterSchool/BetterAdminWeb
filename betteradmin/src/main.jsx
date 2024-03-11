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

export default function Header() {
  return (
    <nav>
        <ul>
        {/* <Link to={"/"}>Forside</Link>
          <Link to={"renting/"}>Udlejninger</Link>
          <Link to={"calender/"}>Skema</Link>
          <Link to={"/"}>Forside</Link> */}
            <li><a href="/">Forside</a></li>
            <li><a href="renting">Udlejning</a></li>
            <li><a href="calender">Skema</a></li>
            <li><a href="/">Min konto</a></li>
        </ul>
    </nav>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
