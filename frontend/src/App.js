
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
