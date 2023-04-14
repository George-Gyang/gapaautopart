import React from 'react';
import CategoryMenu from './CategoryMenu';
import BrandMenu from './BrandMenu'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


import "../../asset/css/nav.css"


function NavLinks() {
    return (
        <div className='orange-bg'>
            <div className='container'>
                <nav>
                    <ul className='nav-links'>
                        <li className='me-4'><BrandMenu /></li>
                        <li className='me-4'><CategoryMenu /></li>
                        
                        <li className="d-none d-md-block"><Link to="#">
                            <Button className='border-0 me-1 rounded-0 rounded-top purple-bg' size="lg">
                                ENGINE OIL
                            </Button>
                        </Link>
                        </li>
                        <li className="d-none d-md-block"><Link to="#">
                            <Button className='border-0 me-1 rounded-0 rounded-top purple-bg' size="lg">
                                CAR PARTS
                            </Button>
                        </Link>
                        </li>
                        <li className="d-none d-md-block"><Link to="#">
                            <Button className='border-0 me-1 rounded-0 rounded-top purple-bg' size="lg">
                                CAR CARE
                            </Button>
                        </Link>
                        </li>
                        <li className="d-none d-md-block"><Link to="#">
                            <Button className='border-0 me-1 rounded-0 rounded-top purple-bg' size="lg">
                                CAR ACCESSORIES
                            </Button>
                        </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavLinks;
