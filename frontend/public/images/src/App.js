import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';

// pages and components
import Home from './pages/Home';
import Navbar from './components/Navbar2';
import AddListing from './pages/AddListing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Listings from './pages/Listings'
import MyListings from './pages/MyListings'
import ProductPage from './pages/ProductPage'
import useAuthContext from './hooks/useAuthContext';
import ScrollToTop from './components/scrollToTop';

function App() {

  const {user} = useAuthContext()
  return (
    
    <BrowserRouter>

      <Navbar />

      <div className="pages h-screen">
        <ScrollToTop />

        <Routes>
          
          <Route 
          path='/add'
          element={<AddListing />}
          />

          <Route 
              path="/"
              element={user ? <Home/> : <Navigate to="/login"/>}            
          />
          <Route 
              path="/signup"
              element={!user ? <Signup/>: <Navigate to="/"/>}
          />
          <Route 
              path="/login"
              element={!user ? <Login/> : <Navigate to="/"/>}
          />

          <Route
            path="/listings" 
            element = {user? <Listings/> : <Navigate to ="/login"/>}
          />
          <Route
            path="/listings/details/:id" 
            element = {user? <ProductPage/> : <Navigate to ="/login"/>}
          />
          
          <Route 
          path ="/mylistings"
          element ={user? <MyListings/> : <Navigate to ="/login"/>}
          />
        </Routes>
      </div>

    </BrowserRouter>
      

  );
}

export default App;
