import React from "react"

import s from '../../../styles/main_page/rates/Pro.module.css'
import target from '../../../media/target.svg'
import checkbox from '../../../media/checkbox.svg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Pro() {
  return (
    <Card className={s.block}>
      <Card.Body>
        <Card.Title className={s.card_title}>
            <img className={s.target_image} src={target} alt="target"></img>
            <p className={s.card_title_header}>Pro</p>
            <p className={s.card_title_text}>Для HR и фрилансеров</p>
        </Card.Title>
        <div className={s.card_body}>
          <p className={s.rate_field}>
            <span className={s.rate_marking}>Текущий тариф</span> 
          </p>
          <p className={s.prices}>
              <span className={s.actual_price}>1299 ₽</span>
              <s className={s.former_price}>2600 ₽</s>
          </p>
          <p className={s.installment}>или 279 ₽/мес. при рассрочке на 24 мес.</p>
          <p className={s.benefits_header}>В тариф входит:</p>
          <p className={s.benefits}><img src={checkbox} alt="checkbox"></img>Все пункты тарифа Beginner</p>
          <p className={s.benefits}><img src={checkbox} alt="checkbox"></img>Экспорт истории</p>
          <p className={s.benefits}><img src={checkbox} alt="checkbox"></img>Рекомендации по приоритетам</p>
        </div>
        <Button className={s.button}>Подробнее</Button>
      </Card.Body>
    </Card>
  );
}

export default Pro;