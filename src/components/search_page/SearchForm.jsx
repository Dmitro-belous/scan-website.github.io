import React from "react";
import s from '../../styles/search_page/SearchForm.module.css'

function SearchForm() {
    return (
        <div className={s.search_block}>
            <form action="" method="get" className="form-example">
                <div className={s.input_block}>
                    <div className={s.form_input}>
                        <label className={s.label_search} for="taxpayer's number">ИНН компании*</label>
                        <br/>
                        <input className={s.input_search} type="text" name="taxpayer's number" id="taxpayer's number" placeholder="10 цифр" required />
                    </div>
                    <div className={s.form_input}>
                        <label className={s.label_search} for="mode">Тональность</label>
                        <br/>
                        <input className={s.input_search} type="text" name="mode" id="mode" required />
                    </div>
                    <div className={s.form_input}>
                        <label className={s.label_search} for="text">Количество документов в выдаче*</label>
                        <br/>
                        <input className={s.input_search} type="text" name="email" id="email" placeholder="От 1 до 1000" required />
                    </div>
                    <div className={s.form_input}>
                        <label className={s.label_search} for="email">Диапазон поиска*</label>
                        <br/>
                        <input className={s.input_search} type="text" name="email" id="email" required />
                    </div>
                </div>
                <div className={s.checkbox_block}>
                    <div className={s.form_checkbox}>
                        <input type="checkbox" id="scales" name="scales" />
                        <label className={s.label_search} for="scales">Признак максимальной полноты</label>
                    </div>
                    <div className={s.form_checkbox}>
                        <input type="checkbox" id="horns" name="horns" />
                        <label className={s.label_search} for="horns">Упоминания в бизнес-контексте</label>
                    </div>
                    <div className={s.form_checkbox}>
                        <input type="checkbox" id="scales" name="scales" />
                        <label className={s.label_search} for="scales">Главная роль в публикации</label>
                    </div>
                    <div className={s.form_checkbox}>
                        <input type="checkbox" id="horns" name="horns" />
                        <label className={s.label_search} for="horns">Публикации только с риск-факторами</label>
                    </div>
                    <div className={s.form_checkbox}>
                        <input type="checkbox" id="horns" name="horns" />
                        <label className={s.label_search} for="horns">Включать технические новости рынков</label>
                    </div>
                    <div className={s.form_checkbox}>
                        <input type="checkbox" id="scales" name="scales" />
                        <label className={s.label_search} for="scales">Включать анонсы и календари</label>
                    </div>
                    <div className={s.form_checkbox}>
                        <input type="checkbox" id="horns" name="horns" />
                        <label className={s.label_search} for="horns">Включать сводки новостей</label>
                    </div>
                </div>                
                <div className={s.form_search}>
                    <input className={s.button_submit} type="submit" value="Поиск" />
                </div>
                <p className={s.required_field} href="*">* Обязательные к заполнению поля</p>
            </form>
        </div>
    );
}

export default SearchForm;