import * as React from 'react';

import '../styles/AuthHeader.css'

function AuthHeader() {
    return (
        <div className='testDiv'>
            <button className='auth_button'>Зарегистрироваться</button>
            <button className='login_button'>Войти</button>
        </div>
    );
}

export default AuthHeader;