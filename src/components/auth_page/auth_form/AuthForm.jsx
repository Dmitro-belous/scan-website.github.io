import React, { useState } from "react";
import s from '../../../styles/auth_page/auth_form/AuthForm.module.css'
import google from '../../../media/auth_page/google_icon.svg'
import facebook from '../../../media/auth_page/facebook_icon.svg'
import yandex from '../../../media/auth_page/yandex_icon.svg'
import { observer } from "mobx-react-lite";
import LoginForm from "./LoginForm";
import PasswordForm from "./PasswordForm";
import ButtonLogin from "./ButtonLogin"

function AuthForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkedLogin, checkLogin] = useState(true);
    const [checkedPassword, checkPassword] = useState(true);      

    const handleDataFromLogin = (username) => {
        setUsername(username);
    }

    const handleDataFromPassword = (password) => {
        setPassword(password);
    }

    return (
        <form id='auth_form' onSubmit={e => e.preventDefault()} className={s.auth_block}>
            <button className={s.button_login}>Войти</button>
            <button className={s.button_auth}>Зарегистрироваться</button>
            <div>
                <LoginForm setUsername={handleDataFromLogin} checkedLogin={checkedLogin}/>
                <PasswordForm setPassword={handleDataFromPassword} checkedPassword={checkedPassword} password={password}/>
                <ButtonLogin 
                username={username} 
                password={password} 
                setPassword={handleDataFromPassword} 
                checkLogin={checkLogin} 
                checkPassword={checkPassword}/>
                <a className={s.password_recovery} href="*">Восстановить пароль</a>
                <p className={s.log_in_via}>Войти через:</p>
                <button className={s.alt_login}><img src={google} alt="google"></img></button>
                <button className={s.alt_login}><img src={facebook} alt="facebook"></img></button>
                <button className={s.alt_login}><img src={yandex} alt="yandex"></img></button>
            </div>
        </form>
    );
}

export default observer(AuthForm);