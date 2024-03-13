import s from '../../../styles/search_page/search_form/RenderLabel.module.css'

export function LabelDemand({checkedValue, value, htmlFor}) {
    if(!checkedValue) {
      if(!value) {
        return(
          <><br/><label className={s.wrong_label_blank} htmlFor={htmlFor}>Обязательное поле</label></>
        );
      }
      return(
        <><br/><label className={s.wrong_label} htmlFor={htmlFor}>Введите корректные данные</label></>
      );
    }
  }

export function DateLabelDemand({checkedDate, startDate, endDate, htmlFor}) {
  if(!checkedDate) {
    if(!startDate || !endDate) {
      return(
        <><br/><label className={s.wrong_date_label_blank} htmlFor={htmlFor}>Обязательное поле</label></>
      );
    }
    return(
      <><br/><label className={s.wrong_date_label} htmlFor={htmlFor}>Введите корректные данные</label></>
    );
  }
}