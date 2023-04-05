import React from 'react';
import './web.css';

function Footer() {
  return (
    <footer>
      <div className="contact">
        <h4>Reach Us</h4>
        <p>No 54,Nehru Street</p>
        <p>Gandhipuram,coimbatore-641080</p>
        
        <p>Email: industry@tn.com</p>
      </div>
      <div className="social">
        <h4>Connect With Us</h4>
        <ul>
          <a href="#">Facebook</a><br></br>
          <a href="#">Twitter</a><br></br>
          <a href="#">Instagram</a><br></br>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;