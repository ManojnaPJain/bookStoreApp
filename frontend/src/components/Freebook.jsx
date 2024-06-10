import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json'
import Cards from './Cards';

function Freebook(props) {
    const filterdata=list.filter((data)=>data.category==="free");
   var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 ">
    <div>
        <h1><b>Free courses offered</b></h1>
      <p>all books are good</p>
    </div>
    <div className="">
    <Slider {...settings}> 
        {filterdata.map((item)=>(
<Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>

  )

};


export default Freebook

