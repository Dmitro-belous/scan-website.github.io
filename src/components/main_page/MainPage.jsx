import man from "../../media/main_page/happy_man.png"
import sittingMan from "../../media/main_page/sitting_man.svg"
import Carousel from "./Carousel";
import Beginner from "./rates/Beginner";
import Pro from "./rates/Pro";
import Bisiness from "./rates/Bisiness";
import ButtonData from "./ButtonData";

import s from '../../styles/main_page/MainPage.module.css';

function MainPage() {
    return (
    <div className={s.grid_wrapper}>
        <div className={s.company_definition}>
            <h1 className={s.text_about_company}>сервис по поиску<br/>публикаций<br/>о компании<br/>по его инн</h1>
            <h3 className={s.service_features}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</h3>
            <ButtonData />
        </div>
        <div className={s.searching_man}>
            <img className={s.searcher} src={man} alt="man is looking for data"></img>
        </div>
        <div className={s.carousel}>
            <h2 className={s.header_text}>почему именно мы</h2>
            <Carousel />
        </div>
        <div className={s.svg_elements}>
            <img className={s.picture} src={sittingMan} alt="a sitting man"></img>
        </div>
        <div className={s.rates}>
            <h2 className={s.header_text}>наши тарифы</h2>
            <Beginner />
            <Pro />
            <Bisiness />
        </div>
    </div>
    );
}

export default MainPage;