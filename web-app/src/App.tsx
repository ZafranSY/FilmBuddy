import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import MovieHub from './components/MovieHub';
import MoodMovie from './components/MoodMovie';
function App() {
  return (
    
<div className="text-3xl font-bold ">
      <Navbar/>

<BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path='/MovieHub' element={<MovieHub/>}/>
          <Route path='/MoodMovie' element={<MoodMovie/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
