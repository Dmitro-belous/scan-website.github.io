export default class AuthService {
    static async login(username, password) {
        let responce = await fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'             
            },
            body: JSON.stringify({
                login: username,
                password: password
            })
        })

        return responce.json()
    }
}