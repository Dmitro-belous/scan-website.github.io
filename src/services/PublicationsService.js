export default class PublicationsService {
    static async getPublications(ids) {
        let responce = await fetch('https://gateway.scan-interfax.ru/api/v1/documents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`             
            },
            body: JSON.stringify({
                "ids": ids
              })
        })

        return responce.json();
    }
}