import s from '../../../styles/auth_page/auth_form/LoginForm.module.css'

function LoginForm({setUsername, checkedLogin}) {

    return (
        <div className={s.form_name}>
            <label className={s.label_auth} htmlFor="login">Логин или номер телефона: </label>
            <br/>
            <input 
                onChange={e => setUsername(e.target.value)}
                className={checkedLogin ? s.input_auth : s.input_auth_wrong} 
                type="text" 
                id="login" required />
            {!checkedLogin ? <><br/><label className={s.wrong_label} htmlFor="login">Введите корректные данные</label></> : null}
        </div>
    );
}

export default LoginForm;