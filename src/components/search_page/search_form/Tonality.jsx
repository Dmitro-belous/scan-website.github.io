import s from '../../../styles/search_page/search_form/Tonality.module.css'

function Tonality({setTonality}) {
    return (
        <select 
          className={s.input_search_select} 
          type="text" 
          onChange={e => setTonality(e.target.value)}  
          id="tonality">
            <option value="any">Любая</option>
            <option value="any">Положительная</option>
            <option value="any">Отрицательная</option>                            
        </select>
    );
}

export default Tonality;