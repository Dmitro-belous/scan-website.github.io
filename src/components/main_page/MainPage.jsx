import man from "../../media/happy_man.png"
import sittingMan from "../../media/sitting_man.svg"
import Carousel from "./Carousel";
import Beginner from "./rates/Beginner";
import Pro from "./rates/Pro";
import Bisiness from "./rates/Bisiness";

import s from '../../styles/main_page/MainPage.module.css'
import Header from "../Header";
import Footer from "../Footer";


function MainPage() {
    return (
    <div className={s.grid_wrapper}>
        <div className={s.header} tabIndex="1">
            <Header />
        </div>
        <div className={s.company_definition} tabIndex="2">
            <p className={s.text_about_company}>СЕРВИС ПО ПОИСКУ<br/>ПУБЛИКАЦИЙ<br/>О КОМПАНИИ<br/>ПО ЕГО ИНН</p>
            <p className={s.service_features}>Комплексный анализ публикаций, получение данных<br/>в формате PDF на электронную почту.</p>
            <button className={s.button_data}>Запросить данные</button>
        </div>
        <div className={s.searching_man} tabIndex="3">
            <img className={s.picture} src={man} alt="man is looking for data"></img>
        </div>
        <div className={s.carousel} tabIndex="4">
            <p className={s.header_text}>ПОЧЕМУ ИМЕННО МЫ</p>
            <Carousel />
        </div>
        <div className={s.svg_elements} tabIndex="5">
            <img className={s.picture} src={sittingMan} alt="a sitting man"></img>
        </div>
        <div className={s.rates} tabIndex="6">
            <p className={s.header_text}>НАШИ ТАРИФЫ</p>
            <Beginner />
            <Pro />
            <Bisiness />
        </div>
        <div className={s.footer} tabIndex="7">
            <Footer />
        </div>
    </div>
    )
}

export default MainPage;