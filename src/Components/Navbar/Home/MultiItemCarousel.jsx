import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React from 'react'
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import { topMeal } from "./TopMeal";

const MultiItemCarousel = () => {
  return (
    <div>
        <Slider>
            {topMeal.map((item)=> <CarouselItem image={item.image} title={item.title}/>)}
        </Slider>
    </div>
  )
}

export default MultiItemCarousel