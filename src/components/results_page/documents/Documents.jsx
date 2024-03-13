import React, { useContext } from "react";

import s from '../../../styles/results_page/documents/Documents.module.css'
import { Context } from "../../..";
import { observer } from "mobx-react-lite";
import Document from "./Document";

function Documents() {
    const {store} = useContext(Context);

    const handleClick = () => {
        store.loadNextPosts();
    }
    
    return (
        <>
        <div className={s.documents_field}>      
        {store.displayedPublications?.map((document, index) => {
            return(
            <Document key={document.ok.id} el={document}/>
            );
        })}   
        </div>   
        {store.displayedPublications?.length !== store.publicationsList.length ? <button className={s.button_data} onClick={handleClick}>Показать больше</button> : null}
        </>
    );
}

export default observer(Documents);