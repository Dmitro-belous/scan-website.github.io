import s from '../../styles/results_page/VariantsNum.module.css'

import { useContext } from 'react';
import { Context } from '../..';
import { formattingCount } from '../../formatting';
import { observer } from 'mobx-react-lite';

function VariantsNum() {
    const {store} = useContext(Context);
    
    return (
        <h3 className={s.number_of_variants}>Найдено {formattingCount(store.varCount)} вариантов</h3>
    );
}

export default observer(VariantsNum);