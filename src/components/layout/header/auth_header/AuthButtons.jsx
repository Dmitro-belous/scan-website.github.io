import s from '../../../../styles/layout/header/auth_header/AuthButtons.module.css'
import { useNavigate } from 'react-router';

function AuthButtons() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/account')
    };

    return (
        <div className={s.auth_buttons_block}>
            <button className={s.auth_button}>Зарегистрироваться</button>
            <div className={s.border}></div>
            <button className={s.login_button} onClick={handleClick}>Войти</button>   
        </div>
    );
}

export default AuthButtons;