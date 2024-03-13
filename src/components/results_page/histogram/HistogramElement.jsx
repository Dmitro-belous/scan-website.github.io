import '../../../styles/results_page/histogram/HistogramElement.css'
import { formattingDate } from '../../../formatting';

function HistogramElement({el}) {  
    return(        
      <>
        <div id='histogram-slide'>
          <div>
          <p className='inner_text'>{formattingDate(el.date)}</p>
          <p className='inner_text'>{el.totalValue}</p>
          <p className='inner_text'>{el.valueRisk}</p>             
          </div>
        <div className='line'></div>   
        </div>  
      </>
    );
}

export default HistogramElement;