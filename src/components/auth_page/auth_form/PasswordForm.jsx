import s from '../../../styles/auth_page/auth_form/PasswordForm.module.css'

function PasswordForm({setPassword, checkedPassword, password}) {

    return (
        <div className={s.form_password}>
            <label className={s.label_auth} htmlFor="password">Пароль: </label>
            <br/>
            <input 
            onChange={e => setPassword(e.target.value)}
            className={checkedPassword ? s.input_auth : s.input_auth_wrong} 
            value={password} 
            type="password" 
            id="password" required />
            {!checkedPassword ? <><br/><label className={s.wrong_label} htmlFor="password">Неправильный пароль</label></> : null}
        </div>
    );
}

export default PasswordForm;