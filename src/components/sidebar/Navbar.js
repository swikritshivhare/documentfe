import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ViewListIcon from '@mui/icons-material/ViewList';
import './Navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <button className="menu-toggle" onClick={toggleNav}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button> */}

      <div className='side-nav'>
        <ul>
          <li className='nav-link'>
           <Link to="/create" ><HomeIcon/>Create Document</Link></li>
          <li><Link to="/doclist"><ViewListIcon/>Document list</Link></li>
          
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
