import { useContext, useEffect } from 'react';
import '../../../../styles/layout/header/auth_header/HeaderCount.css'
import { Context } from '../../../..';
import { observer } from 'mobx-react-lite';
import Loader from '../../../general/Loader';

function HeaderCount() {
    const {store} = useContext(Context)

    useEffect(() => {store.handleLimitInfo()}, [])

    return (
        <div className='company_count_block'>
            {store.eventFiltersInfo ? <>            
            <p className='company_count_text'>Использовано компаний <span className='companies_number'>{store.eventFiltersInfo.usedCompanyCount}</span></p>
            <p className='company_count_text'>Лимит по компаниям <span className='limit_number'>{store.eventFiltersInfo.companyLimit}</span></p>
             </> : <Loader className={'loader_header'}/>}
        </div>
    );
}

export default observer(HeaderCount);