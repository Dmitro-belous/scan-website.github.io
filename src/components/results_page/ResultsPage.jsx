import s from '../../styles/results_page/ResultsPage.module.css';
import woman from '../../media/results_page/searching_woman.svg';
import Histogram from './histogram/Histogram';
import Documents from './documents/Documents';
import VariantsNum from './VariantsNum';
import { useContext, useEffect } from 'react';
import { Context } from '../..';
import { useNavigate } from 'react-router';


function ResultsPage() {
    const {store} = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if(!store.isAuth) {
            navigate('/')
        }
    }, [])
    
    return (
    <div className={s.grid_wrapper}>
        <div className={s.searching_for_results}>
            <h2 className={s.searching_results}>ищем. скоро<br/>будут результаты</h2>
            <h3 className={s.time_to_search}>Поиск может занять некоторое время,<br/>просим сохранять терпение.</h3>
        </div>
        <div className={s.searching_woman}>
            <img className={s.woman_pic} src={woman} alt="woman is looking for data"></img>
        </div>
        <div className={s.carousel}>
            <h2 className={s.header_text}>общая сводка</h2>
            <VariantsNum />
            <Histogram />
        </div>
        <div className={s.documents}>
            <h2 className={s.header_text}>список документов</h2>
            <Documents />
        </div>
    </div>
    )
}

export default ResultsPage;