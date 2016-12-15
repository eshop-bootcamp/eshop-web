import config from './config';

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.statusText);
        error.response = response
        throw error;
    }
};

export default {
    POST: (url, body, headers) => {
        return fetch(config.baseurl + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(body)
            })
            .then(checkStatus)
            .then(res => res.json());
    },
    GET: (url) => {
        return fetch(config.baseurl + url)
                .then(checkStatus)
                .then(res => res.json());
    }
}