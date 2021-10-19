import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mb-5">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="img d-block w-100"
            src="https://i.ibb.co/42S3pLy/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Keep yourself and others safe: Do it all!</h3>
            <p>
              Get vaccinated as soon as it’s your turn and follow local guidance
              on vaccination.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="img d-block w-100"
            src="https://i.ibb.co/3B4kcBN/2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Wear a mask properly</h3>
            <p>
              Clean your hands before you put your mask on, before and after you
              take it off, and after you touch it at any time.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img d-block w-100"
            src="https://i.ibb.co/6tCS7xZ/3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Make your environment safer</h3>
            <p>
              Avoid the 3Cs: spaces that are closed, crowded or involve close
              contact.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
