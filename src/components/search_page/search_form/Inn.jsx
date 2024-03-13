import s from '../../../styles/search_page/search_form/InputSearch.module.css'
import { validateInn } from '../../../validation/validation';

function Inn({inn, setInn, checkedInn, checkInn}) {

    return (
        <input 
        className={checkedInn ? s.input_search : s.input_search_wrong} 
        type="text" 
        id="inn" 
        value={inn}
        placeholder="10 цифр"
        onChange={e => setInn(e.target.value)}
        onBlur={() => checkInn(validateInn(inn))}
        onInvalid={() => setInn('')}
        required />
    );
}

export default Inn;