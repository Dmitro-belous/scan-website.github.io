export default class LimitService {

    static async accountInfo() {
        let responce = await fetch('https://gateway.scan-interfax.ru/api/v1/account/info', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`          
            }
        })

        return  responce.json();
    };
}

