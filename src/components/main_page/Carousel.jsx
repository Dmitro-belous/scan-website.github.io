import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import '../../styles/main_page/Carousel.css'
import {CustomPrevArrow, CustomNextArrow} from './CustomArrow';
import slideOne from '../../media/carousel/slide_1.svg'
import slideTwo from '../../media/carousel/slide_2.svg'
import slideThree from '../../media/carousel/slide_3.svg'


function Carousel() {
    if (window.screen.width > 750) {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: (<CustomPrevArrow />),
            nextArrow: (<CustomNextArrow />),
        }
        return (
            <div className='carousel-block'>
                <Slider {...settings}>
                    <div>
                        <img className="slide-card" src={slideOne} alt='slide 1'></img>
                    </div>
                    <div>
                        <img className="slide-card" src={slideTwo} alt='slide 2'></img>
                    </div>
                    <div>
                        <img className="slide-card" src={slideThree} alt='slide 3'></img>
                    </div>
                    <div>
                        <img className="slide-card" src={slideOne} alt='slide 1'></img>
                    </div>
                    <div>
                        <img className="slide-card" src={slideOne} alt='slide 1'></img>
                    </div>
                    <div>
                        <img className="slide-card" src={slideOne} alt='slide 1'></img>
                    </div>
                </Slider>
            </div>
        );
    } else {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: (<CustomPrevArrow />),
            nextArrow: (<CustomNextArrow />),
    }
        return (
            <div className='carousel-block'>
                <Slider {...settings}>
                    <div>
                        <img  className="slide-card" src={slideOne} alt='slide 1'></img>
                    </div>
                    <div>
                        <img  className="slide-card" src={slideTwo} alt='slide 2'></img>
                    </div>
                    <div>
                        <img  className="slide-card" src={slideThree} alt='slide 3'></img>
                    </div>
                    <div>
                        <img  className="slide-card" src={slideOne} alt='slide 1'></img>
                    </div>
                    <div>
                        <img  className="slide-card" src={slideOne} alt='slide 1'></img>
                    </div>
                    <div>
                        <img  className="slide-card" src={slideOne} alt='slide 1'></img>
                    </div>
                </Slider>
            </div>
    )};
};

export default Carousel;
