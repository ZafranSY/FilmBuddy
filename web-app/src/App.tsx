import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from './components/Navbar'
import MovieHub from './components/MovieHub';
import MoodMovie from './components/MoodMovie';
import Login from './components/login';
import SignupPage from './components/SignupPage';

function App() { 
   const ConditionalNavbar = () => {
  const location = useLocation(); // Get the current path
  const excludeNavbarPaths = ['/login','/signup']; // Define paths where the navbar should not appear

  return !excludeNavbarPaths.includes(location.pathname) ? <Navbar /> : null;
};
  return (
    
<div className="text-3xl font-bold ">

<BrowserRouter>     {/* Conditionally render the navbar */}
<ConditionalNavbar />
      <Routes>
        <Route path="/">
          <Route path='/MovieHub' element={<MovieHub/>}/>
          <Route path='/MoodMovie' element={<MoodMovie/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
