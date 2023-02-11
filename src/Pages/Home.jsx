import React from 'react'
import Navbar from '../Components/Navbar';
import ProductList from '../Components/ProductList';
import Sidebar from '../Components/Sidebar';

const Home = () => {

  return (
    <div>
        <Navbar />
        <div style={{display:"flex"}}>
            <Sidebar />
            <ProductList />
        </div>
      
    </div>
  )
}

export default Home;
