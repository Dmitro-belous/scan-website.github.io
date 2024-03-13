import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import '../../styles/main_page/Carousel.css'
import slideOne from '../../media/main_page/carousel/slide_1.svg'
import slideTwo from '../../media/main_page/carousel/slide_2.svg'
import slideThree from '../../media/main_page/carousel/slide_3.svg'
import leftArrow from '../../media/general/left_arrow.svg'
import rightArrow from '../../media/general/right_arrow.svg'

function Carousel() {         
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: window.screen.width > 750 ? 3 : 1,
        slidesToScroll: 1,
        prevArrow:( 
            <button>        
                <div><img src={leftArrow} alt="left arrow"></img></div>
            </button>
        ),
        nextArrow:(
            <button>        
                <div><img src={rightArrow} alt="right arrow"></img></div>
            </button>
        )
    } 
    return(     
        <div className='carousel-block' id='main-page-carousel'>
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
}

export default Carousel;
