import s from '../../styles/main_page/ButtonData.module.css'
import { useContext } from "react";
import { Context } from "../..";
import { useNavigate } from "react-router";
import { observer } from 'mobx-react-lite';

function ButtonData() {
    const {store} = useContext(Context)
    const navigate = useNavigate()

    return (
        store.isAuth ? <button className={s.button_data} onClick={() => navigate('/search')}>Запросить данные</button> : null
    );
}

export default observer(ButtonData);