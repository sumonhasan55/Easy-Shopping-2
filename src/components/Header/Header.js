import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            
            <nav  className='header-container'>
            <h1>Easy Shoping</h1>
               <div>
                   <a href='/Shop'>Shop</a>
                   <a href='/Order'>Orders</a>
                   <a href='/Inventory'>Inventory</a>
                   <a href='About Us'>About Us</a>
                   <a href='Order Review'>Order Review</a>
               </div>
           </nav>
        </div>
    );
};

export default Header;