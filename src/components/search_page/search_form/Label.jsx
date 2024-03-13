import s from '../../../styles/search_page/search_form/Label.module.css'

function Label(props) {

    return (
        <label className={s.label_search} htmlFor={props.htmlFor}>{props.children}</label>
    );
}

export default Label;