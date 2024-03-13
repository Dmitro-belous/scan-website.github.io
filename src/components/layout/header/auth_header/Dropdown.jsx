import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../../styles/layout/header/auth_header/Dropdown.css'

import logo from '../../../../media/footer/scan_logo_footer.svg'

function Dropdown() {
    const [isChecked, setIsChecked] = useState(false);
    
    const navigate = useNavigate();

    const handleChange = () => {
        setIsChecked(!isChecked)
    }

    const handleClick = () => {
        setIsChecked(!isChecked)
        navigate('/account')
    };

    return(      
        <div className="hamburger-menu">
            <input id="menu__toggle" onChange={handleChange} checked={isChecked} type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
            </label>
            <nav className="dropdown_nav">
                <img className="menu__image" src={logo} alt='company logo'></img>
                <ul className="menu__box">
                    <li><Link className="menu__item" to="/" onClick={handleChange}>Главная</Link></li>
                    <li><Link className="menu__item" to="#">Тарифы</Link></li>
                    <li><Link className="menu__item" to="#">FAQ</Link></li>
                    <li><Link className="menu__item" to="#">Зарегистрироваться</Link></li>
                </ul>
                <button className="dropdown_login_button" onClick={handleClick}>Войти</button>
            </nav>
        </div> 
    )       
}

export default Dropdown;