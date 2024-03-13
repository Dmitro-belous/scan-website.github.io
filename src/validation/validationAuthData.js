// список всех доступных логинов и паролей
const AUTHDATA = [
    {
        login: 'sf_student1',
        password: '4i2385j'
    },
    {
        login: 'sf_student2',
        password: 'lV8xjCH'
    },
    {
        login: 'sf_student3',
        password: '6z9ZFRs'
    },
    {
        login: 'sf_student4',
        password: 'Br1+tbG'
    },
    {
        login: 'sf_student5',
        password: 'LuwAwJf'
    },
    {
        login: 'sf_student6',
        password: 'eczpWCB'
    },
    {
        login: 'sf_student7',
        password: 'P6VcKNf'
    },
    {
        login: 'sf_student8',
        password: '5QB0KM/'
    },
    {
        login: 'sf_student9',
        password: 'DTdEwAn'
    },
    {
        login: 'sf_student10',
        password: 'KHKfTXb'
    }
];

export default function validateAuthData(username, password) {
    let result = {
        validLogin: false,
        validPassword: false
    };

    const inputAuthData = {
        login: username,
        password: password
    };

    AUTHDATA.forEach(el => {
        if(inputAuthData.login === el.login && inputAuthData.password === el.password) {
            result = {
                validLogin: true,
                validPassword: true            
            };
        } else if(inputAuthData.login === el.login && inputAuthData.password !== el.password) {
            result = {
                validLogin: true,
                validPassword: false            
            };
        };
    })

    return result;
}