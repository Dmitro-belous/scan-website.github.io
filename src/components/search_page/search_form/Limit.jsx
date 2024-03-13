import s from '../../../styles/search_page/search_form/InputSearch.module.css'
import { validateLimit } from '../../../validation/validation';

function Limit({limit, setLimit, checkedLimit, checkLimit}) {
    return (
        <input 
        className={checkedLimit ? s.input_search : s.input_search_wrong} 
        type="text" 
        id="limit" 
        placeholder="от 1 до 1000"
        onChange={e => setLimit(e.target.value)}
        onBlur={() => checkLimit(validateLimit(limit))}
        required />
    );
}

export default Limit;