import React, { useContext } from 'react';
import { Context } from '../../../index.js';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import '../../../styles/results_page/histogram/Histogram.css'
import Slider from 'react-slick';
import leftArrow from '../../../media/general/left_arrow.svg'
import rightArrow from '../../../media/general/right_arrow.svg'
import HistogramElement from './HistogramElement';
import { observer } from 'mobx-react-lite';
import LoaderBlock from './LoaderBlock.jsx';

function Histogram() {  
    const {store} = useContext(Context);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: window.screen.width > 750 ? 8 : 1,
        slidesToScroll: 1,
        nextArrow: (
                <button>
                  <div><img src={rightArrow} alt='right arrow'></img></div>
                </button>
          ),
        prevArrow: (
                <button>
                  <div><img src={leftArrow} alt='left arrow'></img></div>
                </button>
          ),
    };

    return(          
          <div className='slider-block'>
            <div className='slider_header'>
              <p className='slider_header_text'>Период</p>
              <p className='slider_header_text'>Всего</p>
              <p className='slider_header_text'>Риски</p>
            </div>
            {store.displayedPublications ?
            <Slider {...settings}>
                {store.histogramData?.map((el, index) => {
                      return(
                          <HistogramElement key={index} el={el}/>
                      );
                })}  
            </Slider> 
            :    
            <LoaderBlock />}
          </div>
    );
}

export default observer(Histogram);
