import React, { useState } from 'react';

const Navbar = () => {
  const [navLinkOpen, setNavLinkOpen] = useState(false);

  const handleNavLinkToggle = () => {
    console.log("Hi there!", navLinkOpen);
    setNavLinkOpen(!navLinkOpen);
  };

  const renderClasses = () => {
    let classes = "navlinks";


    if (navLinkOpen) {
      classes += " active";
    }

    return classes;
  };

  return (
    <nav>
      <div className="logo">
        <i className="fas fa-mountain"></i>
        <h4>Mountains</h4>
      </div>
      <ul className={renderClasses()}>
        <li className='link'><a href="#home">Home</a></li>
        <li className='link'><a href="#about">About</a></li>
        <li className='link'><a href="#services">Services</a></li>
        <li className='link'><a href="#contact">Contact Us</a></li>
      </ul>
      <div onClick={handleNavLinkToggle} className='hamburger-toggle'>
        <i className="fas fa-bars fa-lg"></i>
      </div>
    </nav>)
  ;
};

export default Navbar;
