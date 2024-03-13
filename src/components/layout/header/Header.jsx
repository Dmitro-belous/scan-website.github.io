import s from '../../../styles/layout/header/Header.module.css'
import logo from '../../../media/header/scan_logo.svg'
import AuthHeader from '../header/auth_header/AuthHeader'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <img className={s.logo_header} src={logo} alt='company logo'></img>
            <nav className={s.head_text}>
                    <Link className={s.header_link} to='/'>Главная</Link>
                    <Link className={s.header_link} to='#'>Тарифы</Link>
                    <Link className={s.header_link} to='#'>FAQ</Link>
            </nav>
            <AuthHeader />
        </header>
    );
}

export default Header;