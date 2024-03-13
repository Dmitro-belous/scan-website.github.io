import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import LimitService from "../services/LimitService";
import ObjectsService from "../services/ObjectsService";
import PublicationsService from "../services/PublicationsService";
import { formattingText } from "../formatting";

export default class Store {
    user = null;
    isAuth = false;
    eventFiltersInfo = null;
    histogramData = [];
    varCount = 0;
    publicationsList = [];
    displayedPublications = null;
    chunkSize = 10;

    constructor() {
        makeAutoObservable(this);
        // восстановление данных из localStorage при обновлении страницы
        const savedAuth = localStorage.getItem('isAuth');
        if (savedAuth) {
            this.isAuth = savedAuth;
        }

        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            this.user = savedUser;
        }

        const savedEventFiltersInfo = localStorage.getItem('eventFiltersInfo');
        if (savedEventFiltersInfo) {
            this.eventFiltersInfo = JSON.parse(savedEventFiltersInfo);
        }

        const savedHistogramData = localStorage.getItem('histogramData');
        if (savedHistogramData) {
            this.histogramData = JSON.parse(savedHistogramData);
        }   

        const savedVarCount = localStorage.getItem('varCount');
        if (savedVarCount) {
            this.varCount = savedVarCount;
        }  
        //общее кол-во запрашиваемых публикаций
        const savedPublicationsList = [];
        for (let i = 0; i < localStorage.getItem('publications amount'); i++) {
            savedPublicationsList.push({
                ok: {
                    id: localStorage.getItem(`${i} publication id`),
                    url: localStorage.getItem(`${i} publication url`),
                    issueDate: localStorage.getItem(`${i} publication date`),
                    source: {name: localStorage.getItem(`${i} publication source name`)},
                    title: {text: localStorage.getItem(`${i} publication title`)},
                    attributes: JSON.parse(localStorage.getItem(`${i} publication attributes`)),
                    content: {markup: localStorage.getItem(`${i} publication content`)}
                }
            })
        }     
        if (savedPublicationsList) {
            this.publicationsList = savedPublicationsList;
        } 
        
        //отображаемые публикации
        const savedDisplayedPublications = [];
        for (let i = 0; i < localStorage.getItem('displayed publications amount'); i++) {
            savedDisplayedPublications.push({
                ok: {
                    id: localStorage.getItem(`${i} displayed publication id`),
                    url: localStorage.getItem(`${i} displayed publication url`),
                    issueDate: localStorage.getItem(`${i} displayed publication date`),
                    source: {name: localStorage.getItem(`${i} displayed publication source name`)},
                    title: {text: localStorage.getItem(`${i} displayed publication title`)},
                    attributes: JSON.parse(localStorage.getItem(`${i} displayed publication attributes`)),
                    content: {markup: localStorage.getItem(`${i} displayed publication content`)}
                }
            })
        } 
        if (savedDisplayedPublications) {
            this.displayedPublications = savedDisplayedPublications;
        }
    };

    setAuth(bool) {
        this.isAuth = bool;
        localStorage.setItem('isAuth', bool);
    };

    setUser(user) {
        this.user = user;
        localStorage.setItem('user', user);        
    };

    setEventFiltersInfo(info) {
        this.eventFiltersInfo = info;
        localStorage.setItem('eventFiltersInfo', JSON.stringify(info));          
    };

    setHistogramData(data) {
        this.histogramData = data;
        localStorage.setItem('histogramData', JSON.stringify(data));  
    }

    setVarCount(num) {
        this.varCount = num;
        localStorage.setItem('varCount', num);  
    }
    //разбиваем полученные публикации для хранения в localStorage
    setPublicationsList(publicationsList) {
        this.publicationsList = publicationsList;
        publicationsList.forEach((el, index) => {          
            localStorage.setItem(`${index} publication id`, el.ok.id);  
            localStorage.setItem(`${index} publication url`, el.ok.url); 
            localStorage.setItem(`${index} publication date`, el.ok.issueDate); 
            localStorage.setItem(`${index} publication source name`, el.ok.source.name); 
            localStorage.setItem(`${index} publication title`, el.ok.title.text); 
            localStorage.setItem(`${index} publication attributes`, JSON.stringify(el.ok.attributes)); 
            localStorage.setItem(`${index} publication content`, formattingText(el.ok.content.markup));             
        });              
        localStorage.setItem('publications amount', publicationsList.length);
    }

    setDisplayedPublications(publications) {
        this.displayedPublications = publications;
        publications?.forEach((el, index) => {          
            localStorage.setItem(`${index} displayed publication id`, el.ok.id);  
            localStorage.setItem(`${index} displayed publication url`, el.ok.url); 
            localStorage.setItem(`${index} displayed publication date`, el.ok.issueDate); 
            localStorage.setItem(`${index} displayed publication source name`, el.ok.source.name); 
            localStorage.setItem(`${index} displayed publication title`, el.ok.title.text); 
            localStorage.setItem(`${index} displayed publication attributes`, JSON.stringify(el.ok.attributes)); 
            localStorage.setItem(`${index} displayed publication content`, formattingText(el.ok.content.markup));             
        });              
        localStorage.setItem('displayed publications amount', publications?.length);         
    }
    //обработчик входа на сайт
    async handleLogin(username, password) {
        try {
            const response = await AuthService.login(username, password);
            if (response.accessToken) {
                localStorage.setItem('token', response?.accessToken);
                this.setAuth(true);
                this.setUser(username);
            }
        } catch(e) {
            console.log(e.response?.data?.message);
        }
    }
    //обработчик запроса на информацию по лимиту компаний
    async handleLimitInfo() {
        try {
            const response = await LimitService.accountInfo();
            if (response.eventFiltersInfo) {
                this.setEventFiltersInfo({
                    'usedCompanyCount': response.eventFiltersInfo.usedCompanyCount,
                    'companyLimit': response.eventFiltersInfo.companyLimit
                });
            }
        } catch(e) {
            console.log(e.response?.data?.message);
        }
    }
    //обработчик запроса общей сводки
    async handleHistogram(url, 
        inn,
        tonality,
        limit,
        startDate,
        endDate,
        maxFullness,
        inBusinessNews,
        onlyMainRole,
        onlyWithRiskFactors,
        techNews,
        announcements,
        digests) {
        let totalDoc = [];
        let riskFac = [];
        let dataProt = [];

        let compare = (a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
 
            return dateB - dateA;
        }
        try {
            const response = await ObjectsService.objectsInfo(url, 
                inn,
                tonality,
                limit,
                startDate,
                endDate,
                maxFullness,
                inBusinessNews,
                onlyMainRole,
                onlyWithRiskFactors,
                techNews,
                announcements,
                digests);
                if (response.data) {
                    response.data.forEach(element => {
                        if (element.histogramType === 'totalDocuments') {
                            totalDoc = element.data.sort(compare);
                        } else {
                            riskFac = element.data.sort(compare);
                        }
                    });

                    let count = 0;

                    totalDoc.forEach(el => {
                        dataProt.push({
                        'date': el.date,
                        'totalValue': el.value,
                        });
                        count += el.value;
                    });

                    this.setVarCount(count);

                    for (let i = 0; i < riskFac.length; i++) {
                        let elemTotalDoc = dataProt[i];
                        let elemRiskFac = riskFac[i];                      
                        elemTotalDoc['valueRisk'] = elemRiskFac.value;
                    }    
                    this.setHistogramData(dataProt);                
                } else {
                    this.setHistogramData([])
                }
            } catch(e) {
                console.log(e);
            }
    }    
    //обработчик запроса документов
    async handleObjectsSearch(url, 
        inn,
        tonality,
        limit,
        startDate,
        endDate,
        maxFullness,
        inBusinessNews,
        onlyMainRole,
        onlyWithRiskFactors,
        techNews,
        announcements,
        digests) {
        let compare = (a, b) => {
            const dateA = new Date(a.ok.issueDate);
            const dateB = new Date(b.ok.issueDate);
 
            return dateB - dateA;
        }
        try {
            const response = await ObjectsService.objectsInfo(url, 
                inn,
                tonality,
                limit,
                startDate,
                endDate,
                maxFullness,
                inBusinessNews,
                onlyMainRole,
                onlyWithRiskFactors,
                techNews,
                announcements,
                digests);
            let idsList = [];
            response.items.forEach(el => {
                idsList.push(el.encodedId)
            })
            let pubList = [];
            while (idsList.length > 0) {
                const updatedResponse = await PublicationsService.getPublications(idsList.slice(0, 100));
                idsList.splice(0, 100)
                updatedResponse.forEach(el => pubList.push(el))                                           
            }
            pubList.sort(compare);         
            this.setPublicationsList(pubList);
            this.setDisplayedPublications(pubList.slice(0, 10));               
            console.log(pubList);                 

            } catch(e) {
                console.log(e);
            }
    }    
    //"ленивая загрузка" постов
    loadNextPosts() {
        const startIndex = this.displayedPublications.length;
        const endIndex = startIndex + this.chunkSize;
        const nextChunk = this.publicationsList.slice(startIndex, endIndex);
        this.setDisplayedPublications([...this.displayedPublications, ...nextChunk]);
    }
    //выйти из аккаунта
    logout() {
        this.setAuth(false);
        this.setUser({});   
        this.setEventFiltersInfo(null);
        this.setHistogramData([]);
        this.setVarCount(0);
        this.setPublicationsList([]);
        this.setDisplayedPublications(null);  
        localStorage.clear();      
    }    
}
