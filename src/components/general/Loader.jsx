import loader from '../../media/general/loader.svg'
import '../../styles/general/Loader.css'

function Loader({className}) {
    return (
        <img alt='loader' src={loader} className={className}></img>  
    );
}

export default Loader;
