/*
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Book from './components/Book'
import Available from './components/Table'


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
               <Route 
              path="/login"
              element={<Login />}
            />
               <Route 
              path="/signup"
              element={<Signup />}
            /> 
              <Route
              path='/reserve'
              element={<Book />}
            /> 
              <Route
              path='/availability'
              element={<Available />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
*/

import React, { useState } from "react";

import Login from './pages/Login';
import Signup from './pages/Signup';

import Main from "./components/Main";
import Book from "./components/Book";
import Navbar from "./components/Navbar";
import ThankYou from "./components/Confirmation";


// eslint-disable-next-line import/no-anonymous-default-export
export default _ => {
  const [page, setPage] = useState(0);

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === 0 ? <Main setPage={setPage} /> : null}
      {page === 1 ? <Book setPage={setPage} /> : null}
      {page === 2 ? <ThankYou /> : null}
      
      {page === 3 ? <Login setPage={setPage} /> : null}
      {page === 4 ? <Signup setPage={setPage} /> : null}
    </div>
  )
}