import React from "react";
import s from '../../styles/auth_page/AuthForm.module.css'
import google from '../../media/auth_page/google_icon.svg'
import facebook from '../../media/auth_page/facebook_icon.svg'
import yandex from '../../media/auth_page/yandex_icon.svg'

function AuthForm() {
    return (
        <div className={s.auth_block}>
            <button className={s.button_login}>Войти</button>
            <button className={s.button_auth}>Зарегистрироваться</button>
            <form action="" method="get" className="form-example">
                <div className={s.form_name}>
                    <label className={s.label_auth} for="name">Логин или номер телефона: </label>
                    <br/>
                    <input className={s.input_auth} type="text" name="name" id="name" required />
                </div>
                <div className={s.form_password}>
                    <label className={s.label_auth} for="email">Пароль: </label>
                    <br/>
                    <input className={s.input_auth} type="password" name="password" id="password" required />
                </div>
                <div className={s.form_auth}>
                    <input className={s.button_submit} type="submit" value="Войти" />
                </div>
                <a className={s.password_recovery} href="*">Восстановить пароль</a>
                <p className={s.log_in_via}>Войти через:</p>
                <button className={s.alt_login}><img src={google} alt="google"></img></button>
                <button className={s.alt_login}><img src={facebook} alt="facebook"></img></button>
                <button className={s.alt_login}><img src={yandex} alt="yandex"></img></button>
            </form>
        </div>
    );
}

export default AuthForm;