import React from 'react';

const Footer = ()=>{
  return(
    <footer className="site-footer">
      <p>
        <span className="text-center">
        &copy;Copyright {new Date().getFullYear()} |  Alan Fidelino - React Developer
        </span>
      </p>
    </footer>
  )
}
export default Footer;
