import s from '../../../../styles/search_page/search_form/checkboxes/Checkboxes.module.css'
import Checkbox from './Checkbox';

function Checkboxes({
    maxFullness, 
    setMaxFullness,
    inBusinessNews,
    setInBusinessNews,
    onlyMainRole,
    setOnlyMainRole,
    onlyWithRiskFactors,
    setOnlyWithRiskFactors,
    techNews,
    setTechNews,
    announcements,
    setAnnouncements,
    digests,
    setDigests}) {

    return (
        <div className={s.checkbox_block}>
            <Checkbox setValue={setMaxFullness} value={maxFullness} id={"maxFullness"} text={"Признак максимальной полноты"} checked={true}/>
            <Checkbox setValue={setInBusinessNews} value={inBusinessNews} id={"inBusinessNews"} text={"Упоминания в бизнес-контексте"} checked={true}/>
            <Checkbox setValue={setOnlyMainRole} value={onlyMainRole} id={"onlyMainRole"} text={"Главная роль в публикации"} checked={true}/>
            <Checkbox setValue={setOnlyWithRiskFactors} value={onlyWithRiskFactors} id={"onlyWithRiskFactors"} text={"Публикации только с риск-факторами"} checked={false}/>  
            <Checkbox setValue={setTechNews} value={techNews} id={"techNews"} text={"Включать технические новости рынков"} checked={false}/> 
            <Checkbox setValue={setAnnouncements} value={announcements} id={"announcements"} text={"Включать анонсы и календари"} checked={true}/>
            <Checkbox setValue={setDigests} value={digests} id={"digests"} text={"Включать сводки новостей"} checked={false}/>                                    
        </div>
    );
}

export default Checkboxes;
