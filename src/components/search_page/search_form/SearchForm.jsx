import React, { useState } from "react";
import s from '../../../styles/search_page/search_form/SearchForm.module.css'

import Tonality from "./Tonality.jsx";
import Asterisk from "./Asterisk.jsx";
import Inn from "./Inn.jsx";
import Limit from "./Limit.jsx";
import SearchRange from "./SearchRange.jsx";
import Label from "./Label.jsx";
import Checkboxes from "./checkboxes/Checkboxes.jsx";
import ButtonSearch from "./ButtonSearch.jsx";
import { DateLabelDemand, LabelDemand } from "./RenderLabel.jsx";

function SearchForm() {
    const [inn, setInn] = useState('');
    const [checkedInn, checkInn] = useState(true);
    const [tonality, setTonality] = useState('any');    
    const [limit, setLimit] = useState('');
    const [checkedLimit, checkLimit] = useState(true);    
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [checkedDate, checkDate] = useState(true);    
    const [maxFullness, setMaxFullness] = useState(true);
    const [inBusinessNews, setInBusinessNews] = useState(true);
    const [onlyMainRole, setOnlyMainRole] = useState(true);
    const [onlyWithRiskFactors, setOnlyWithRiskFactors] = useState(false);   
    const [techNews, setTechNews] = useState(false);      
    const [announcements, setAnnouncements] = useState(true);
    const [digests, setDigests] = useState(false);
    
    return (
        <form id='search_form' onSubmit={e => e.preventDefault()} className={s.search_block}>
                <div className={s.input_block}>
                    <div className={s.form_input}>
                        <Label htmlFor={'inn'}>ИНН компании<Asterisk checkedValue={checkedInn}/></Label>
                        <br/>
                        <Inn inn={inn} setInn={setInn} checkedInn={checkedInn} checkInn={checkInn}/>
                        <LabelDemand checkedValue={checkedInn} value={inn} htmlFor={'inn'}/>                      
                    </div> 
                    <div className={s.form_input}>
                        <Label htmlFor={'tonality'}>Тональность</Label>
                        <br/>
                        <Tonality setTonality={setTonality} />
                    </div>
                    <div className={s.form_input}>
                        <Label htmlFor={"limit"}>Количество документов в выдаче<Asterisk checkedValue={checkedLimit}/></Label>
                        <br/>
                        <Limit limit={limit} setLimit={setLimit} checkedLimit={checkedLimit} checkLimit={checkLimit} />
                        <LabelDemand checkedValue={checkedLimit} value={limit} htmlFor={'limit'}/>   
                    </div>
                    <div className={s.form_input}>
                        <Label htmlFor={"date"}>Диапазон поиска<Asterisk checkedValue={checkedDate}/></Label>
                        <br/>
                        <SearchRange 
                        startDate={startDate} 
                        setStartDate={setStartDate} 
                        endDate={endDate} 
                        setEndDate={setEndDate} 
                        checkedDate={checkedDate} 
                        checkDate={checkDate}/>
                        <DateLabelDemand checkedDate={checkedDate} startDate={startDate} endDate={endDate} htmlFor={'date'} />                          
                    </div>
                </div>
                <Checkboxes
                    maxFullness={maxFullness} 
                    setMaxFullness={setMaxFullness}
                    inBusinessNews={inBusinessNews}
                    setInBusinessNews={setInBusinessNews}
                    onlyMainRole={onlyMainRole}
                    setOnlyMainRole={setOnlyMainRole}
                    onlyWithRiskFactors={onlyWithRiskFactors}
                    setOnlyWithRiskFactors={setOnlyWithRiskFactors}
                    techNews={techNews}
                    setTechNews={setTechNews}
                    announcements={announcements}
                    setAnnouncements={setAnnouncements}
                    digests={digests}
                    setDigests={setDigests} />
                <ButtonSearch 
                  inn={inn}
                  tonality={tonality}
                  limit={limit}
                  startDate={startDate}
                  endDate={endDate}
                  maxFullness={maxFullness}
                  inBusinessNews={inBusinessNews}
                  onlyMainRole={onlyMainRole}
                  onlyWithRiskFactors={onlyWithRiskFactors}
                  techNews={techNews}
                  announcements={announcements}
                  digests={digests}
                  checkDate={checkDate}
                  checkInn={checkInn}
                  checkLimit={checkLimit}
                  checkedDate={checkedDate}
                  checkedInn={checkedInn}
                  checkedLimit={checkedLimit}/>
                <p className={s.required_field}>* Обязательные к заполнению поля</p>
        </form>
    );
}

export default SearchForm;