import React from "react"


import s from '../../../styles/main_page/rates/Bisiness.module.css'
import laptop from '../../../media/laptop.svg'
import checkbox from '../../../media/checkbox.svg'

function Bisiness() {
  return (
    <div className={s.block}>
      <div>
        <div className={s.card_title}>
            <img className={s.laptop_image} src={laptop} alt="laptop"></img>
            <p className={s.card_title_header}>Bisiness</p>
            <p className={s.card_title_text}>Для корпоративных клиентов</p>
        </div>
        <div className={s.card_body}>
          <p className={s.rate_field}>
            <span className={s.rate_marking}>Текущий тариф</span> 
          </p>
          <p className={s.prices}>
            <span className={s.actual_price}>2379 ₽</span>
            <s className={s.former_price}>3700 ₽</s>
          </p>
          <p className={s.installment}>&#8203;</p>
          <p className={s.benefits_header}>В тариф входит:</p>
          <p className={s.benefits}><img src={checkbox} alt="checkbox"></img>Все пункты тарифа Pro</p>
          <p className={s.benefits}><img src={checkbox} alt="checkbox"></img>Безлимитное количество запросов</p>
          <p className={s.benefits}><img src={checkbox} alt="checkbox"></img>Приоритетная поддержка</p>
        </div>
        <button className={s.button}>Подробнее</button>
      </div>
    </div>
  );
}

export default Bisiness;