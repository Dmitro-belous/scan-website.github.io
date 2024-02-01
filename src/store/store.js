import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";

export default class Store {
    user = {};
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    async login(username, password) {
        console.log('hi2');
        try {
            const response = await AuthService.login(username, password);
            localStorage.setItem('token', response?.data?.accessToken);
            this.setAuth(true);
            this.setUser(response);
        } catch(e) {
            console.log(e.response?.data?.message);
        }

    }

    // async handleLogin(login, password) {
    //     try {
    //         const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 login: login,
    //                 password: password,
    //                 // Другие параметры аутентификации, если необходимо
    //             }),
    //         });
    
    //         if (response.ok) {
    //             const data = await response.json();
    //             const accessToken = data.accessToken;
    //             this.setAuth(true)
    //             console.log('Login successful. Access Token:', accessToken);
    //             // Далее вы можете сохранить токен в состоянии приложения или использовать его по вашему усмотрению
    //         } else {
    //             console.error('Login failed');
    //         }
    //     } catch (error) {
    //         console.error('Error during login:', error);
    //     }
    // };

    // async login(username, password) {
    //     console.log('hi2')
    //     // const response = await AuthService.login(username, password);
    //     let response = await fetch("https://gateway.scan-interfax.ru/api/v1/account/login",
    //         {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json',
    //                         'Accept': 'application/json',
    //                     },
    //             body: `{
    //                 "login": "${username}",
    //                 "password": "${password}" 
    //             }`
    //     });
    //     console.log(response);
    //     localStorage.setItem('token', response?.data?.accessToken);
    //     this.setAuth(true);
    //     this.setUser(response);
    // }

    async logout() {
        const response = await AuthService.logout();
        console.log(response);
        localStorage.removeItem('token');
        this.setAuth(false);
        this.setUser({});
    }    
}
// let response = await fetch("https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms",
//           {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json',
//                        'Accept': 'application/json',
//                        'Authorization': `Bearer ${token}`
//                       },
//             body: `{  
//                 "limit": 15,
//                 "sortType": "issueDate",
//                 "sortDirectionType": "asc",

//                 "intervalType": "month",
//                 "histogramTypes": [
//                 "totalDocuments", "riskFactors"
//                 ],
                
//                 "issueDateInterval": {
//                 "startDate": "${this.state.input.dateStart}",
//                 "endDate": "${this.state.input.dateEnd}"
//                 },
                
//                 "searchContext": {
//                 "targetSearchEntitiesContext": {
//                 "targetSearchEntities": [
//                   {
//                   "type": "company",
//                   "sparkId": null,
//                   "entityId": null,
//                   "inn": "${this.state.input.inn}",
//                   "maxFullness": true,
//                   "inBusinessNews": null
//                   }
//                 ],
//                 "onlyMainRole": true,
//                 "tonality": "any",
//                 "onlyWithRiskFactors": true,
//                 "riskFactors": {
//                   "and": [
//                     {
//                       "id": 0
//                     }
//                   ],
//                   "or": [
//                     {
//                       "id": 0
//                     }
//                   ],
//                   "not": [
//                     {
//                       "id": 0
//                     }
//                   ]
//                 },
//                 "themes": {
//                 "and": [
//                   {
//                     "tonality": "any",
//                     "entityId": 0
//                   }
//                 ],
//                 "or": [
//                   {
//                     "tonality": "any",
//                     "entityId": 0
//                   }
//                 ],
//                 "not": [
//                   {
//                     "tonality": "any",
//                     "entityId": 0
//                   }
//                 ]
//               }
//             },
//             "searchEntitiesFilter": {
//               "and": [
//                 {
//                   "type": "company"
//                 }
//               ],
//               "or": [
//                 {
//                   "type": "company"
//                 }
//               ],
//               "not": [
//                 {
//                   "type": "company"
//                 }
//               ]
//             },
//             "locationsFilter": {
//               "and": [
//                 {
//                   "countryCode": "string",
//                   "regionCode": 0
//                 }
//               ],
//               "or": [
//                 {
//                   "countryCode": "string",
//                   "regionCode": 0
//                 }
//               ],
//               "not": [
//                 {
//                   "countryCode": "string",
//                   "regionCode": 0
//                 }
//               ]
//             },
//             "themesFilter": {
//               "and": [
//                 {
//                   "entityId": 0
//                 }
//               ],
//               "or": [
//                 {
//                   "entityId": 0
//                 }
//               ],
//               "not": [
//                 {
//                   "entityId": 0
//                 }
//               ]
//             }
//             },
//             "attributeFilters": {
//             "excludeTechNews": true,
//             "excludeAnnouncements": true,
//             "excludeDigests": true
//             },
//             "similarMode": "none"
//             }`
//       });