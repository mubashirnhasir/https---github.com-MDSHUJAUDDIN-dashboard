import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Contactform';
import Table_W from './components/Waitlist';
function App() {
  return (
  <>
  <div className='page'>
  <Navbar title="SnapSeva"/>
        <BrowserRouter>
        <Routes>
          <Route path="/Contactform" element={<Table/>}/>
          <Route path="/Waitlist" element={<Table_W/>}/>
        </Routes>
        </BrowserRouter>

      <div>
        <Table/>
      </div>
   </div>
   </>
  );
}

export default App;

