import React from 'react';
import './web.css';

function Header() {
  return (
    <header>
    <h2 id='title'>TATA MOTORS</h2>
      <img src="https://images.pexels.com/photos/2480481/pexels-photo-2480481.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Company logo" id="logo"/>
      
      <nav class="topnav">
      
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        
      </nav>
    </header>
  );
}

export default Header;