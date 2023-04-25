import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import DropdownSubCategory from './SubCategory';
import HamburgerIcon from './HamburgerIcon';

function CategoryMenu() {
  const [isShown, setIsShown] = useState(false);

  function handleMouseEnter() {
    setIsShown(true);
  }

  function handleMouseLeave() {
    setIsShown(false);
  }


  const categories = [
    {
      id: 1,
      name: "Break Parts",
      subCategory: ['Brake Pad', 'Brake Disc', 'Brake Caliper', 'Brake Shoe']
    },
    {
      id: 2,
      name: "Engine",
      subCategory: ["HVAC > A/C Compressor", "Belts and Chains> V-Ribbed Belt", "Mass Airflow Sensor", "HAVC > A/C Condenser", "Water Pump", "Magnetic Clutch"]
    },
    {
      id: 3,
      name: "Filters",
      subCategory: ['Cabin Filter', 'Air Filter', 'Engine Oil Filter']
    }, {
      id: 4,
      name: "Drivetrain",
      subCategory: ['Shaft']
    }, {
      id: 5,
      name: "Suspension and Arms",
      subCategory: ['Stabilizers & Components> Stabilizer Linkage', 'Wheel Bearing Hub', 'Shock Absorber', 'Upper Arm', 'Shaft',  'Lower Arm', 'Ball Joint' ]
    }, {
      id: 6,
      name: "Steering",
      subCategory: ['Tie Rod End', 'Pedal to steering wheel lock']
    }, {
      id: 7,
      name: "Sensor",
      subCategory: ['MASS AIR FLOW SENSOR', 'Tire Pressure Monitoring sensor', 'Speed Sensor' ]
    },
    
  ]
  const categoryList = categories.map((category) => (
    <li key={category.id}><DropdownSubCategory category={category} /></li>
  ))


  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Button className='border-0 d-flex rounded-0 rounded-top' size="lg">
      <span> CATEGORIES </span>
        <HamburgerIcon/>
      </Button>
      {/* <button>Dropdown</button> */}
      {isShown && (
        <ul className="dropdown-menu">
          {categoryList}
          {/* <li><DropdownSubCategory category="Brakes System" /></li>
          <li><DropdownSubCategory category="Engine" /></li>
          <li><DropdownSubCategory category="Filter" /></li>
          <li><DropdownSubCategory category="Drivetrain" /></li>
          <li><DropdownSubCategory category="Suspension and Arms" /></li>
          <li><DropdownSubCategory category="steering" /></li>
          <li><DropdownSubCategory category="Sensors" /></li> */}
        </ul>
      )}
    </div>
  );
}

export default CategoryMenu;