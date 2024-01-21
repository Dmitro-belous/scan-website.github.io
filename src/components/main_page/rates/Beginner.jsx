import React from "react"

import s from '../../../styles/main_page/rates/Beginner.module.css'
import lamp from '../../../media/lamp.svg'
import checkbox from '../../../media/checkbox.svg'

import button from 'react-bootstrap/button';
import Card from 'react-bootstrap/Card';

function Beginner() {
  return (
    <div className={s.block}>
      <div styleName='overflow: hidden'>
        <div className={s.card_title}>
            <img className={s.lamp_image} src={lamp} alt="lamp"></img>
            <p className={s.card_title_header}>Beginner</p>
            <p className={s.card_title_text}>Для небольшого исследования</p>
        </div>
        <div className={s.card_body}>
          <p className={s.rate_field}>
            <span className={s.rate_marking}>Текущий тариф</span> 
          </p>
          <p className={s.prices}>
            <span className={s.actual_price}>799 ₽</span>
            <s className={s.former_price}>1200 ₽</s>
          </p>
          <p className={s.installment}>или 150 ₽/мес. при рассрочке на 24 мес.</p>
          <p className={s.benefits_header}>В тариф входит:</p>
          <p className={s.benefits}><img src={checkbox} alt="checkbox"></img>Безлимитная история запросов</p>
          <p className={s.benefits}><img src={checkbox} alt="checkbox"></img>Безопасная сделка</p>
          <p className={s.benefits}><img src={checkbox} alt="checkbox"></img>Поддержка 24/7</p>
        </div>
        <button className={s.button}>Подробнее</button>
      </div>
    </div>
  );
}

export default Beginner;