import s from '../../styles/auth_page/AuthPage.module.css';
import characters from '../../media/auth_page/characters.svg';
import lock from '../../media/auth_page/lock.svg';
import AuthForm from '../auth_page/auth_form/AuthForm';


function AuthPage() {
    return (
    <div className={s.grid_wrapper}>
        <div className={s.authorization_requirement}>
            <h2 className={s.header_requirement}>для оформления подписки <br/>на тариф, необходимо авторизоваться.</h2>
        </div>
        <div className={s.authorization_form}>
            <img src={lock} alt='lock' className={s.lock}></img>
            <AuthForm />
        </div>
        <div className={s.svg_elements}>
            <img src={characters} alt='characters'></img>
        </div>
    </div>
    );
}

export default AuthPage;