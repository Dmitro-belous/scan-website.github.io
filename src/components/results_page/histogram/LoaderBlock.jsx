import s from '../../../styles/results_page/histogram/LoaderBlock.module.css'
import Loader from '../../general/Loader.jsx';

function LoaderBlock() {  
    if(window.screen.width > 750) {
        return(
        <div className={s.loader_block}>
            <Loader className={'loader_histogram'}/>
            <span className='loader_text'>Загружаем данные</span>        
        </div>         
        );
    } else {
        return(        
        <div className={s.loader_block}>
            <Loader className={'loader_histogram_mobile'}/>         
        </div>  
        );
    }
}

export default LoaderBlock;