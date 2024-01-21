import '../../styles/results_page/MyCarousel.css'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import leftArrow from '../../media/left_arrow.png'
import rightArrow from '../../media/right_arrow.png'

function MyCarousel() {
  if (window.screen.width > 750) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      nextArrow: (
              <div>
                <div className="next-slick-arrow"><img src={rightArrow} alt='right arrow'></img></div>
              </div>
        ),
      prevArrow: (
              <div>
                <div className="prev-slick-arrow"><img src={leftArrow} alt='left arrow'></img></div>
              </div>
        ),
    };
    return (         
      <div className='slider-block'>
        <div className='slider_header'>
          <div className='slider_header_text'>Период</div>
          <div className='slider_header_text'>Всего</div>
          <div className='slider_header_text'>Риски</div>
        </div>
        <Slider {...settings}>
          <div>
          <p className='inner_text'>SLIDE 1</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 2</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 3</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 4</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 5</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 6</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 7</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 8</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 9</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 10</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 11</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 12</p>
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
      nextArrow: (
          <div>
            <div className="next-slick-arrow"><img src={rightArrow} alt='right arrow'></img></div>
          </div>
        ),
      prevArrow: (
          <div>
            <div className="prev-slick-arrow"><img src={leftArrow} alt='left arrow'></img></div>
          </div>
        ),
      };
    return (         
      <div className='slider-block'>
        <div className='slider_header'>
          <p className='slider_header_text'>Период</p>
          <p className='slider_header_text'>Всего</p>
          <p className='slider_header_text'>Риски</p>
        </div>
        <Slider {...settings}>
          <div>
          <p className='inner_text'>SLIDE 1</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 2</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 3</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 4</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 5</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 6</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 7</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 8</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 9</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 10</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 11</p>
          </div>
          <div>
          <p className='inner_text'>SLIDE 12</p>
          </div>                    
        </Slider>
      </div>
    );   
  }
}

export default MyCarousel;
