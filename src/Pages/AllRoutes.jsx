import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../Components/PrivateRoute';
import Admin from './Admin';
import Cart from './Cart';
import EditProductPage from './EditProductPage';
import Home from './Home';
import Login from './Login';
import SingleProductPage from './SingleProductPage';

const AllRoutes = () => {

  return (
    <div>
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/login" element={<Login />} />
             <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
             <Route path='/products/:id' element={<PrivateRoute><SingleProductPage /></PrivateRoute>} />
             <Route path="/products/:id/edit" element={<PrivateRoute><EditProductPage /></PrivateRoute>} />
             <Route path="/cart" element={<Cart />}/>
             <Route path="*" element={<h1 style={{textAlign:"center",fontWeight:"bold"}}>404 Page Not Found</h1>} />
         </Routes>
    </div>
  )
}

export default AllRoutes;
