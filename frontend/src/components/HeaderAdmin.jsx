import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from '../pages/Home';
import Renting from '../pages/Renting';
import Login from '../pages/Login';

const navigation =[
    {title: 'Forside', href: '/'},
    {title: 'Brugere', href: '/Renting'},
    {title: 'Ting 3', href: '/Enrollment'},
    {title: 'Ting 4', href: '/Login'},
  ]


function HeaderAdmin() {
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
        </Routes>
      </Router>
            <h1>hej med dig</h1>
        </>
    )
}

export default HeaderAdmin