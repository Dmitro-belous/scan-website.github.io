import s from '../../styles/results_page/ResultsPage.module.css';
import Header from "../Header";
import woman from '../../media/results_page/searching_woman.svg';
import MyCarousel from './MyCarousel';
import Document from './Document';
import Footer from '../Footer';


function ResultsPage() {
    return (
    <div className={s.grid_wrapper}>
        <div className={s.header} tabIndex="1">
            <Header />
        </div>
        <div className={s.searching_for_results} tabIndex="2">
            <p className={s.searching_results}>ИЩЕМ. СКОРО<br/>БУДУТ РЕЗУЛЬТАТЫ</p>
            <p className={s.time_to_search}>Поиск может занять некоторое время,<br/>просим сохранять терпение.</p>
        </div>
        <div className={s.searching_woman} tabIndex="3">
                <img className={s.woman_pic} src={woman} alt="man is looking for data"></img>
        </div>
        <div className={s.carousel} tabIndex="4">
                <p className={s.header_text}>ОБЩАЯ СВОДКА</p>
                <p className={s.number_of_variants}>Найдено 4 221 вариантов</p>
                <MyCarousel />
        </div>
        <div className={s.svg_elements} tabIndex="5">
                {/* <img src={sittingMan} alt="a sitting man"></img> */}
        </div>
        <div className={s.documents} tabIndex="6">
                <p className={s.header_text}>СПИСОК ДОКУМЕНТОВ</p>
                <Document />
                <button className={s.button_data}>Показать больше</button>
        </div>
        <div className={s.footer} tabIndex="7">
                <Footer /> 
        </div>
    </div>
    )
}

export default ResultsPage;