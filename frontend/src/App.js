// import Header from './components/Header/Header';
import Home from './pages/Home';
import Renting from './pages/Renting/Renting';
import './styles/App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      {/* <Header/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Renting/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
