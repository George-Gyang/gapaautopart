import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function CategoryMenu() {
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
          CATEGORIES
        </Button>
      {/* <button>Dropdown</button> */}
      {isShown && (
        <ul className="dropdown-menu">
          <li><Link to="#">Brake System</Link></li>
          <li><Link to="#">Engine</Link></li>
          <li><Link to="#">Filter</Link></li>
        </ul>
      )}
    </div>
  );
}

export default CategoryMenu;