import s from '../../styles/search_page/SearchPage.module.css'
import rocket from '../../media/search_page/rocket.svg'
import document from '../../media/search_page/document.svg'
import folders from '../../media/search_page/folders.svg'
import SearchForm from './search_form/SearchForm'
import { useContext, useEffect } from 'react'
import { Context } from '../..'
import { useNavigate } from 'react-router'

function SearchPage() {
    const {store} = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if(!store.isAuth) {
            navigate('/')
        }
    }, [])
    
    return (
    <div className={s.grid_wrapper}>
        <div className={s.info_about_search}>
            <h2 className={s.header_search}>найдите необходимые<br/>данные в пару кликов.</h2>
            <h3 className={s.text_search}>Задайте параметры поиска.<br/>Чем больше заполните, тем точнее поиск</h3>
        </div>
        <div className={s.svg_docs}>
            <img className={s.document} src={document} alt='document'></img>
            <img className={s.folders} src={folders} alt='folders'></img>
        </div>
        <div className={s.search_form}>
            <SearchForm />
        </div>        
        <div className={s.svg_elements}>
            <img className={s.rocket} src={rocket} alt='the man with a rocket'></img>
        </div>
    </div>
    )
}

export default SearchPage;