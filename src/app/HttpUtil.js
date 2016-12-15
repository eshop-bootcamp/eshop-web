import config from './config';
import Auth from './Auth';
import $ from 'jquery';

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.statusText);
        error.response = response
        throw error;
    }
};
const headers = {
            'Content-Type': 'application/json;charset=UTF-8'
        };
const attachHeader = () => {
    if(Auth.isAuthenticated()){
        return Object.assign({}, headers, {
            "X-Authorization": Auth.getUserToken() 
        });
    }
    return headers;
    
}
export default {
    POST: (url, body, headers) => {
        let customHeaders = attachHeader();
        return fetch(config.baseurl + url, {
            method: 'POST',
            headers: customHeaders,
            body: JSON.stringify(body)
            })
            .then(checkStatus)
            .then(res => res.json());
    },
    GET: (url) => {
        let customHeaders = attachHeader();
        console.log(customHeaders);
        
        let getUrl = config.baseurl + url;
        console.log(getUrl);
        return $.ajax({
            url: getUrl,
            headers: customHeaders
        }).then(data => data);
    }
}