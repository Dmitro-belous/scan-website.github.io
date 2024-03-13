import React from "react"

import s from '../../../styles/main_page/rates/Pro.module.css'
import target from '../../../media/main_page/rates/target.svg'
import checkbox from '../../../media/general/checkbox.svg'
import { observer } from "mobx-react-lite";

function Pro() {
  return (
    <div className={s.block}>
      <div>
        <div className={s.card_title}>
            <img className={s.target_image} src={target} alt="target"></img>
            <h3 className={s.card_title_header}>Pro</h3>
            <h4 className={s.card_title_text}>Для HR и фрилансеров</h4>
        </div>
        <div className={s.card_body}>
          <p className={s.rate_field}>
            <span className={s.rate_marking}>&nbsp;</span> 
          </p>
          <p className={s.prices}>
              <span className={s.actual_price}>1299 ₽</span>
              <s className={s.former_price}>2600 ₽</s>
          </p>
          <p className={s.installment}>или 279 ₽/мес. при рассрочке на 24 мес.</p>
          <h4 className={s.benefits_header}>В тариф входит:</h4>
          <p className={s.benefits}><img src={checkbox} alt="checkbox"></img>Все пункты тарифа Beginner</p>
          <p className={s.benefits}><img src={checkbox} alt="checkbox"></img>Экспорт истории</p>
          <p className={s.benefits}><img src={checkbox} alt="checkbox"></img>Рекомендации по приоритетам</p>
        </div>
        <button className={s.button}>Подробнее</button>
      </div>
    </div>
  );
}

export default observer(Pro);