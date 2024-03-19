import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../Pages/Home";
import Login from "../../Pages/login";

function App() {
  const { isAuthenticated } = useAuth0;
  return (
    <Router>
      <div>
        {isAuthenticated ? (
          <>
            <Routes>
              <Header />
              <Route path='/' element={<Home />} />
            </Routes>
          </>
        ) : (
          <Login />
        )}
      </div>
    </Router>
  );
}

export default App;
