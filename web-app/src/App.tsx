import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import {SignupPage,Login,MoodMovie,MovieHub,Navbar} from'./index'

function App() { 
  const [token,setToken] = useState(false);
   const ConditionalNavbar = () => {
  const location = useLocation(); // Get the current path
  const excludeNavbarPaths = ['/login','/signup']; // Define paths where the navbar should not appear

  return !excludeNavbarPaths.includes(location.pathname) ? <Navbar /> : null;

};

 if(token)
 {
  sessionStorage.setItem('token',JSON.stringify(token))
 }
 useEffect(()=>{
  const tokenString = sessionStorage.getItem('token'); // Might return 'string | null'

  if(tokenString){
    const data = JSON.parse(tokenString )
    setToken(data)
    console.log(data); 
  }
 })
  return (
    
<div className="text-3xl font-bold ">

<BrowserRouter>     {/* Conditionally render the navbar */}
<ConditionalNavbar />
      <Routes>
        <Route path="/">
          <Route path='/MovieHub' element={<MovieHub/>}/>
          <Route path='/MoodMovie' element={<MoodMovie/>}/>
          <Route path='/login' element={<Login setToken={setToken}/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
