import s from '../../../styles/search_page/search_form/ButtonSearch.module.css'

import { useNavigate } from "react-router";
import { Context } from "../../../index.js";
import { useContext } from 'react';

function ButtonSearch(props) {
    const {store} = useContext(Context);
    const navigate = useNavigate();

    const getHistogram = async() => await store.handleHistogram(
        'https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms',
        props.inn,
        props.tonality,
        props.limit,
        props.startDate,
        props.endDate,
        props.maxFullness,
        props.inBusinessNews,
        props.onlyMainRole,
        props.onlyWithRiskFactors,
        props.techNews,
        props.announcements,
        props.digests);
  
    const getObjectsId = async() => await store.handleObjectsSearch(
        'https://gateway.scan-interfax.ru/api/v1/objectsearch',
        props.inn,
        props.tonality,
        props.limit,
        props.startDate,
        props.endDate,
        props.maxFullness,
        props.inBusinessNews,
        props.onlyMainRole,
        props.onlyWithRiskFactors,
        props.techNews,
        props.announcements,
        props.digests); 
    
    const checkTotal = Boolean(props.inn) + Boolean(props.checkedInn) 
    + Boolean(props.limit) + Boolean(props.checkedLimit) + Boolean(props.startDate) 
    + Boolean(props.endDate) + Boolean(props.checkedDate)

    const handleClick = () => {
        if (checkTotal === 7) {
            getHistogram();
            getObjectsId();
            navigate('/results');
        } else if(!props.inn) {       
            props.checkInn(false);            
        } else if(!props.limit) {
            props.checkLimit(false);
        } else if(!props.startDate || !props.endDate) {
            props.checkDate(false);     
        }
    }

    return (
        <div className={s.button_block}>
            <button form='search_form' className={checkTotal === 7 ? s.button_submit : s.button_submit_unactive} onClick={handleClick}>Поиск</button>            
        </div>
    );
}

export default ButtonSearch;