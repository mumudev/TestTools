/*jshint esversion: 6 */
import _ from 'lodash';

function _send(type, options) {
    if (typeof options === 'string') {
        options = { url: options };
    }
    var defaultOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    var newOptions = _.extend({}, defaultOptions);
    newOptions.method = type;
    newOptions.url = options.url;
    if (options.data) {
        newOptions.body = options.data;
    }
    return fetch(newOptions.url, newOptions).then(function (res) {
        if (res.status !== 200) {
            return Promise.reject(res.json());
        }
        return Promise.resolve(res.json());
    }).then(function (data) {
        if (data.code === -1) {
            return Promise.reject(data);
        }
        return Promise.resolve(data);
    }).catch(function (err) {//TODO: show error message and redirect to login page.
        console.log(err);
    });
}

export function Get(option) {
    return _send('GET', option);
}
export function Post(option) {
    return _send('POST', option);
}
export function Patch(option) {
    return _send('PATCH', option);
}
export function Delete(option) {
    return _send('DELETE', option);
}

export default {
    Get,
    Post,
    Patch,
    Delete
};