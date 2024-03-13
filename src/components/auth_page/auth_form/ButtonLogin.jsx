import { useContext } from 'react';
import s from '../../../styles/auth_page/auth_form/ButtonLogin.module.css'
import validateAuthData from '../../../validation/validationAuthData';
import { Context } from '../../..';
import { useNavigate } from 'react-router';

function ButtonLogin({username, password, setPassword, checkLogin, checkPassword}) {
    const {store} = useContext(Context)
    const navigate = useNavigate()

    const handleClick = async() => {
        // сначала проверяем логин и пароль
        const authResult = validateAuthData(username, password)

        // потом на основании проверки "навешиваем" стили на форму
        if(authResult.validLogin) {            
            checkLogin(true)
            checkPassword(authResult.validPassword);   
        } else {
            // если логин неверный, то пароль неважен
            checkLogin(false)
            checkPassword(true);
        }
        
        // затем либо отправляем запрос авторизации, либо делаем кнопку неактивной
        if (authResult.validLogin && authResult.validPassword) {
            await store.handleLogin(username, password);
            navigate('/');
        } else {
            setPassword('');
        }
    }

    return (
        <button form='auth_form'
        className={username && password ? s.button_submit : s.button_submit_unactive} 
        onClick={handleClick}>Войти
        </button>
    );
}

export default ButtonLogin;