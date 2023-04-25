import React, { useState } from 'react';
// import "../../asset/css/nav.css"
// import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import DropdownSubMenu from './SubBrands';
import HamburgerIcon from './HamburgerIcon';

function BrandMenu() {
  const [isShown, setIsShown] = useState(false);

  function handleMouseEnter() {
    setIsShown(true);
  }

  function handleMouseLeave() {
    setIsShown(false);
  }

  const brands = [
    {
      id: 1,
      name: "kia",
      subModels: ['Picanto', 'Optima', 'Cerator', 'sportage', 'Rio']
    },
    {
      id: 2,
      name: "Honda",
      subModels: ["Accord", "Civic"]
    }, {
      id: 3,
      name: "Range Rover",
      subModels: ["Velar", "Evoque", 'Rover', 'Sport']
    }, {
      id: 4,
      name: "Mercedes Benz",
      subModels: ["C- Class", "E- Class", 'G- Class']
    }, {
      id: 5,
      name: "BMW",
      subModels: ["X6", "3 Series", 'X5', '7 Series', '5 Series']
    },
  ]

  const coreBrands = brands.map((brand) => (
    <li key={brand.id}> <DropdownSubMenu myBrands={brand} /> </li>
  ))

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Button className='border-0 d-flex rounded-0 rounded-top' size="lg">
       <span> ALL BRANDS </span>
        <HamburgerIcon/>
      </Button>
      {/* <button>Dropdown</button> */}
      {isShown && (
        <ul className="dropdown-menu">
          {coreBrands}
          {/* <li> <DropdownSubMenu myBrands={brands} /> </li> */}
          {/* <li> <DropdownSubMenu brand="Kia" /> </li>
          <li> <DropdownSubMenu brand="Honda" /> </li>
          <li> <DropdownSubMenu brand="Mercedez Benz" /> </li>
          <li> <DropdownSubMenu brand="Range Rover" /> </li>
          <li> <DropdownSubMenu brand="Lexus" /> </li>
          <li> <DropdownSubMenu brand="BMW" /> </li>
          <li> <DropdownSubMenu brand="Hyundai" /> </li>
          <li> <DropdownSubMenu brand="Volkswagen" /> </li>
          <li> <DropdownSubMenu brand="Toyota" /> </li>
          <li> <DropdownSubMenu brand="Audi" /> </li> */}
        </ul>
      )}
    </div>
  );
}

export default BrandMenu;