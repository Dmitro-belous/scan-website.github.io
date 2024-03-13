import { formattingCount, formattingDate, formattingText, formattingWord } from '../../../formatting';
import s from '../../../styles/results_page/documents/Document.module.css'

function Document({el}) {
    const imgUrl = "https://via.placeholder.com/581x158"
    const imgUrlMobile = "https://via.placeholder.com/297x158"

    let sourceUrl = '';
    el.ok.url ? sourceUrl = el.ok.url : sourceUrl = '#'
    
    return (
        <div className={el.ok.title.text.length < 135 ? s.document_block : s.doc_block_expanded}>
            <p className={s.date}>{formattingDate(el.ok.issueDate)} <a className={s.source_link} href={sourceUrl}>{el.ok.source.name}</a></p>
            <h3 className={s.document_header}>{el.ok.title.text}</h3>
            {el.ok.attributes.isTechNews ? <span className={s.tag}>Технические новости</span> : null}
            {el.ok.attributes.isAnnouncement ? <span className={s.tag}>Анонсы и события</span> : null}
            {el.ok.attributes.isDigest ? <span className={s.tag}>Сводки новостей</span> : null}
            <img className={s.image} src={window.screen.width > 750 ? imgUrl : imgUrlMobile} alt="screenshot"></img>
            <p className={s.document_body}>{formattingText(el.ok.content.markup)}</p>
            <div className={s.document_bottom}>
                <button className={s.source_button} onClick={(e) => {e.preventDefault(); window.location.href=sourceUrl}}>Читать в источнике</button>
                <span className={s.count}>{formattingCount(el.ok.attributes.wordCount)}&nbsp;{formattingWord(el.ok.attributes.wordCount)}</span>  
            </div>
        </div>
    );
}

export default Document;