import React, { useContext } from "react"

import s from '../../../styles/main_page/rates/Beginner.module.css'
import lamp from '../../../media/main_page/rates/lamp.svg'
import checkbox from '../../../media/general/checkbox.svg'
import { Context } from "../../.."
import { observer } from "mobx-react-lite"

function Beginner() {
  const {store} = useContext(Context)
  return (
    <div className={store.isAuth ? s.block_active : s.block}>
      <div>
        <div className={s.card_title}>
            <img className={s.lamp_image} src={lamp} alt="lamp"></img>
            <h3 className={s.card_title_header}>Beginner</h3>
            <h4 className={s.card_title_text}>Для небольшого исследования</h4>
        </div>
        <div className={s.card_body}>
          <p className={s.rate_field}>
            {store.isAuth ? <span className={s.rate_marking}>Текущий тариф</span> : <span>&nbsp;</span>} 
          </p>
          <p className={s.prices}>
            <span className={s.actual_price}>799 ₽</span>
            <s className={s.former_price}>1200 ₽</s>
          </p>
          <p className={s.installment}>или 150 ₽/мес. при рассрочке на 24 мес.</p>
          <h4 className={s.benefits_header}>В тариф входит:</h4>
          <p className={s.benefits}><img src={checkbox} alt="checkbox"></img>Безлимитная история запросов</p>
          <p className={s.benefits}><img src={checkbox} alt="checkbox"></img>Безопасная сделка</p>
          <p className={s.benefits}><img src={checkbox} alt="checkbox"></img>Поддержка 24/7</p>
        </div>
        {store.isAuth ? <button className={s.button_active}>Перейти в личный кабинет</button> : <button className={s.button}>Подробнее</button>}         
      </div>
    </div>
  );
}

export default observer(Beginner);