import { useState } from 'react';
import s from '../../../styles/search_page/search_form/SearchRange.module.css'
import { validateDateRange } from '../../../validation/validation';

function SearchRange({startDate, setStartDate, endDate, setEndDate, checkedDate, checkDate}) {
    const [dateTypeStart, setDateTypeStart] = useState('text');
    const [dateTypeEnd, setDateTypeEnd] = useState('text'); 

    const handleFocusStart = () => {
        setDateTypeStart('date');
    }
    
    const handleBlurStart = () => {
        setDateTypeStart('text');
        checkDate(validateDateRange(startDate, endDate));
    }

    const handleFocusEnd = () => {
        setDateTypeEnd('date');
    }
    
    const handleBlurEnd = () => {
        setDateTypeEnd('text');
        checkDate(validateDateRange(startDate, endDate));
    }
    return (
        <>
            <input 
              onChange={e => setStartDate(e.target.value)} 
              className={checkedDate ? s.date_search : s.date_search_wrong} 
              type={dateTypeStart} 
              id="date"
              onBlur={handleBlurStart} 
              onFocus={handleFocusStart} 
              placeholder="Дата начала" required />
            <input 
              onChange={e => setEndDate(e.target.value)}                         
              className={checkedDate ? s.date_search : s.date_search_wrong} 
              type={dateTypeEnd}  
              onBlur={handleBlurEnd} 
              onFocus={handleFocusEnd} 
              placeholder="Дата конца" required />
        </>
    );
}

export default SearchRange;