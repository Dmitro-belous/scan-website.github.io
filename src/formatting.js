import 'he';

export function formattingDate(date) {
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');

    const formattedDate = `${day}.${month}.${year}`;

    return formattedDate;
}

export function formattingWord(count) {
        const n = count % 100;
        const n1 = n % 10;
        if (n > 10 && n < 20) {return 'слов'};
        if (n1 > 1 && n1 < 5) {return 'слова'};
        if (n1 === 1) {return 'слово'};

        return 'слов';    
}

export function formattingCount(count) {    
        const formattedCount = String(count).split('');
        if (formattedCount.length > 3) {
            formattedCount.splice(-3, 0, <>&nbsp;</>)
        }

        return formattedCount;
}  

export function formattingText(text, limit=500) {
        //декодируем текст
        let he = require('he')
        text = he.decode(text);
        // убираем html тэги
        text = text.replace(/<\/?[^>]+(>|$)/g, '');      
        // регулярное выражение для поиска ссылок в тексте
        const REGEX = /https?:\/\/(?:www\.)?\S+/gi;
        // заменяем найденные ссылки на пустую строку
        text = text.replace(REGEX, "");

        // ограничиваем текст длиной 500 символов
        return text.length > limit ? text.slice(0, limit) + '...' : text;
}
