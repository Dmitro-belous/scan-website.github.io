import '../styles/Header.css'
import logo from '../media/scanLogo.png'
import AuthHeader from './AuthHeader'

function Header() {
    return (
        <header>
            <img className='icon' src={logo} alt='company logo'></img>
            <div className='headText'>
                <a className='header_link' href='#'>Главная</a>
                <a className='header_link' href='#'>Тарифы</a>
                <a className='header_link' href='#'>FAQ</a>
            </div>
            <AuthHeader />
        </header>
    )
}

export default Header;