import s from '../../../styles/search_page/search_form/Asterisk.module.css'

function Asterisk({checkedValue}) {

    return (
        <span className={checkedValue ? s.asterisk : s.wrong_asterisk}>*</span>
    );
}

export default Asterisk;