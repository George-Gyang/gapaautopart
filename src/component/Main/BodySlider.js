import Carousel from 'react-bootstrap/Carousel';




function BodySlider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="images/slides/banner-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="images/slides/banner-2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slides/banner-3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BodySlider;




// import React from "react";
// import { Carousel } from "react-bootstrap";

// const BodySlider = () => {

//     return (
//         <Carousel>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="images/slides/banner-1.png"
//                     alt="First slide"
//                 />
//                 <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="images/slides/banner-2.png"
//                     alt="Second slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="images/slides/banner-3.png"
//                     alt="Third slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>
//                         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                     </p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//         //         <div id="carouselExampleInterval" cllassName="carousel slide" data-bs-ride="carousel">
//         //   <div cllassName="carousel-inner">
//         //     <div cllassName="carousel-item active" data-bs-interval="10000">
//         //       <img src="..." cllassName="d-block w-100" alt="..."/>
//         //     </div>
//         //     <div cllassName="carousel-item" data-bs-interval="2000">
//         //       <img src="..." cllassName="d-block w-100" alt="..."/>
//         //     </div>
//         //     <div cllassName="carousel-item">
//         //       <img src="..." cllassName="d-block w-100" alt="..."/>
//         //     </div>
//         //   </div>
//         //   <button cllassName="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
//         //     <span cllassName="carousel-control-prev-icon" aria-hidden="true"></span>
//         //     <span cllassName="visually-hidden">Previous</span>
//         //   </button>
//         //   <button cllassName="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
//         //     <span cllassName="carousel-control-next-icon" aria-hidden="true"></span>
//         //     <span cllassName="visually-hidden">Next</span>
//         //   </button>
//         // </div>
//     )
// }

// export default BodySlider;