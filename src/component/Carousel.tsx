import React, { Component } from 'react';
import Slider from 'react-slick';

function SampleNextArrow() {
  return <div style={{ display: 'block', fontSize: '20px' }} />;
}

// function SamplePrevArrow() {
//   // const { className, style, onClick } = props;
//   return (
//     <div
//       // className={className}
//       style={{ display: 'none', background: 'green' }}
//       // onClick={onClick}
//     />
//   );
// }

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
    };
    return (
      <div
        style={{ color: 'black', backgroundColor: 'pink', textAlign: 'center' }}
      >
        <h2> Multiple items </h2>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <div
              key={index}
              style={{
                border: '1px solid black',
                height: '100px',
                width: '100px',
                backgroundColor: 'green',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span>{item}</span>
              <br></br>
              <img
                style={{ width: '10px', height: '10px' }}
                // src="../../public/assests/download.png"
                alt="icon"
              />
              <div>Fri</div>
              <div>Fri</div>
              <div>Fri</div>
              <div>Fri</div>
              <div>Fri</div>
              <div>Fri</div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
