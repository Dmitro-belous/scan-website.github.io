import s from '../../../../styles/search_page/search_form/checkboxes/Checkbox.module.css'
import Label from '../Label';

function Checkbox(props) {
    return (
        <div className={s.form_checkbox}>
            <input
            className={s.checkbox_input}
            onChange={() => props.setValue(!props.value)}                           
            type="checkbox" 
            id={props.id} defaultChecked={props.checked}/>
            <Label htmlFor={props.id}>{props.text}</Label>
        </div>
    );
}

export default Checkbox;
