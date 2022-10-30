import { sleep } from 'k6';
import http from 'k6/http';

export let options = {
    duration: '1m',
    vus: 160,
};

// program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


const params = {
    headers: {
        'Keep-Alive': 'timeout=60',
        'Connection': 'keep-alive',
        'content-type': 'application/json'

    },
    timeout: 2000,
};

// send custom payload/post data
const payload = JSON.stringify({
    "firstName": "sarthak",
    "lastName": "jain",
    "email": "sj123" + "@gmail.com",
    "timestamp": 1
});

const url = "http://localhost:8080/api/employees"

export default function () {
    // http.get('http://localhost:8080/api/employees/5', params);
    // http.post(url,payload,params)
    http.post(url,payload,params)
    

    sleep(3);
}


// Connection
// :
// keep-alive
// Vary
// :
// Origin
// Access-Control-Request-Method
// Access-Control-Request-Headers
// Date
// :
// Thu, 11 Aug 2022 19:11:41 GMT
// Content-Type
// :
// application/json
// Transfer-Encoding
// :
// chunked
// Keep-Alive
// :
// timeout=60





// Connection
// :
// close
// Date
// :
// Mon, 15 Aug 2022 11:03:26 GMT
// Content-Type
// :
// application/json
// Transfer-Encoding
// :
// chunked