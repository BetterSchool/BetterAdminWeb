import ReactDOM from "react-dom/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import Login from "./Pages/login";
import Renting from "./Pages/renting";
import Calender from "./Pages/calender";
import Dashboard from "./components/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./Pages/logout";

const router = createBrowserRouter([
  {
    path: "login/",
    element: <Login />,
  },
  {
    path: "logout/",
    element: <Logout />,
  },
  {
    path: "/",
    element: <Header />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard/",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Retning/",
        element: <Renting />,
      },
      {
        path: "/",
        element: <Calender />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <KindeProvider
    clientId='24b80be83e0d431e88a3221660fe5ce5'
    domain='https://betteradmin.kinde.com'
    redirectUri='http://localhost:5173/home/'
    logoutUri='http://localhost:5173/logout/'
  >
    <RouterProvider router={router} />
  </KindeProvider>
);
