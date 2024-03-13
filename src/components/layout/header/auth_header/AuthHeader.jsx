import * as React from 'react';

import { useContext } from "react";
import { Context } from "../../../..";
import { observer } from "mobx-react-lite";
import HeaderCount from "./HeaderCount";
import Dropdown from './Dropdown';
import Avatar from './Avatar';
import AuthButtons from './AuthButtons';

function AuthHeader() {
    const {store} = useContext(Context)

    // проверка, какую версию хэдера показывать (для мобильных или десктопных устройств)
    if (window.screen.availWidth > 750) {
    return (
        store.isAuth ?   
        // отображение данных пользователя
            <>        
            <HeaderCount />
            <Avatar />
            </> 
        :
        // кнопки для регистрации/авторизации        
            <AuthButtons />
    );
    } else {
        return (
            store.isAuth ?   
                <>             
                <HeaderCount />             
                <Dropdown />
                </> 
            :
                <Dropdown />
        ); 
    }
}

export default observer(AuthHeader);