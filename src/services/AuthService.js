import api from '../https/index.js'
import { AxiosResponse } from 'axios'

export default class AuthService {
    static async login(username, password) {
        console.log('AuthService работает!')
        return api.post('account/login', {
            username, password})
        
        // api.post('account/login', {
        //     'login': username,
        //     'password': password
        // })  
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log('Error from AuthService: ' + error);
        //     });
    }

    // static async logout() {
    //     return api.post('account/logout')
    // }
}