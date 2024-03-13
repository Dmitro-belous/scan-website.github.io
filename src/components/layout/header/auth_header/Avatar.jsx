import s from '../../../../styles/layout/header/auth_header/Avatar.module.css'
import avatar from '../../../../media/header/avatar.svg'
import AvatarEditor from 'react-avatar-editor';
import { useContext } from 'react';
import { Context } from '../../../..';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';

function Avatar() {
    const {store} = useContext(Context);
    const navigate = useNavigate();

    const handleClick = () => {
        store.logout();
        navigate('/');
    }

    return (
        <div>
            <div className={s.avatar_text}>            
                <span className={s.username}>{store.user}</span><br/>
                <button className={s.logout} onClick={handleClick}>Выйти</button>    
            </div>         
            <div className={s.avatar_img}>
                <AvatarEditor className={s.avatar}
                image={avatar}
                width={32}
                height={32}
                borderRadius={9999}
                color={[255, 255, 255, 1]} // RGBA
                scale={1}
                rotate={0}/>     
            </div>
        </div>
    );
}

export default observer(Avatar);