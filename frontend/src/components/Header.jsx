import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


import Renting from '../pages/Renting';
import Login from '../pages/Login';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';


const navigation =[
  {title: 'Forside', href: '/'},
  {title: 'Udlejning', href: '/Renting'},
  {title: 'Hold', href: '/Enrollment'},
  {title: 'Login', href: '/Login'},
]


function Header(){
  return (
    <>
      <Router>
        {/* Link bliver brug til navigation på siden */}
        {navigation.map((item) =>(
        <Link to={item.href}>{item.title}</Link>        
        ))}

        <Routes>
        {/* Route tjekker hvilket URL du er på, hvis du er på URL'en "/" vil den vise den component som høre til, i dette tilfælde Home */}
          <Route path='/' element={<Home/>}/>
          <Route path='/Renting' element={<Renting/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default Header;