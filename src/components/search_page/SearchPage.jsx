import s from '../../styles/search_page/SearchPage.module.css'
import Header from "../Header";
import rocket from '../../media/search_page/rocket.svg'
import document from '../../media/search_page/document.svg'
import folders from '../../media/search_page/folders.svg'
import SearchForm from './SearchForm'
import Footer from '../Footer';

function SearchPage() {

    return (
    <div className={s.grid_wrapper}>
        <div className={s.header} tabIndex="1">
            <div className="grid-item item-1">
            <Header />
            </div>
        </div>
        <div className={s.info_about_search} tabIndex="2">
            <div className="grid-item item-2">
            <p className={s.header_search}>НАЙДИТЕ НЕОБХОДИМЫЕ<br/>ДАННЫЕ В ПАРУ КЛИКОВ.</p>
            <p className={s.text_search}>Задайте параметры поиска.<br/>Чем больше заполните, тем точнее поиск</p>
            </div>
        </div>
        <div className={s.svg_docs} tabIndex="3">
            <div className="grid-item item-3">
                <img className={s.document} src={document} alt='document'></img>
                <img className={s.folders} src={folders} alt='folders'></img>
            </div>
        </div>
        <div className={s.search_form} tabIndex="3">
            <div className="grid-item item-3">
                <SearchForm />
            </div>
        </div>        
        <div className={s.svg_elements} tabIndex="4">
            <div className="grid-item item-4">
                <img className={s.rocket} src={rocket} alt='the man with a rocket'></img>
            </div>
        </div>
        <div className={s.footer} tabIndex="5">
            <div className="grid-item item-5">
                <Footer />
            </div> 
        </div>
    </div>
    )
}

export default SearchPage;