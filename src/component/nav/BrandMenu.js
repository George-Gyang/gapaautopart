import React, { useState } from 'react';
// import "../../asset/css/nav.css"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function BrandMenu() {
  const [isShown, setIsShown] = useState(false);

  function handleMouseEnter() {
    setIsShown(true);
  }

  function handleMouseLeave() {
    setIsShown(false);
  }

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
       <Button className='border-0 rounded-0 rounded-top' size="lg">
          ALL BRANDS
        </Button>
      {/* <button>Dropdown</button> */}
      {isShown && (
        <ul className="dropdown-menu">
          <li><Link to="#">KIA </Link></li>
          <li><Link to="#">Honda </Link></li>
          <li><Link to="#">Range Rover </Link></li>
        </ul>
      )}
    </div>
  );
}

export default BrandMenu;