import s from '../../styles/auth_page/AuthPage.module.css'
import Header from "../Header";
import characters from '../../media/auth_page/characters.svg'
import lock from '../../media/auth_page/lock.svg'
import AuthForm from './AuthForm';
import Footer from '../Footer';


function AuthPage() {

    return (
    <div className={s.grid_wrapper}>
        <div className={s.header} tabIndex="1">
            <div className="grid-item item-1">
            <Header />
            </div>
        </div>
        <div className={s.authorization_requirement} tabIndex="2">
            <div className="grid-item item-2">
            <p className={s.header_requirement}>ДЛЯ ОФОРМЛЕНИЯ ПОДПИСКИ <br/>НА ТАРИФ, НЕОБХОДИМО АВТОРИЗОВАТЬСЯ.</p>
            </div>
        </div>
        <div className={s.authorization_form} tabIndex="3">
            <div className="grid-item item-3">
                <img src={lock} alt='lock' className={s.lock}></img>
                <AuthForm />
            </div>
        </div>
        <div className={s.svg_elements} tabIndex="4">
            <div className="grid-item item-4">
                <img src={characters} alt='characters'></img>
            </div>
        </div>
        <div className={s.footer} tabIndex="5">
            <div className="grid-item item-5">
                <Footer />
            </div> 
        </div>
    </div>
    )
}

export default AuthPage;