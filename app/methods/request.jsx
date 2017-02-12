/*jshint esversion: 6 */
import _ from 'lodash';
var cookie = '';
export function login(data) {
    return _send('POST', {
        url: '/v1/api/session',
        data
    });
}
export function getOrder() {
    return;
}
function _send(type, options) {
    if (typeof options === 'string') {
        options = { url: options };
    }
    var defaultOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    };
    var newOptions = _.extend({}, defaultOptions);
    newOptions.method = type;
    newOptions.url = options.url;
    if (options.data) {
        newOptions.body = JSON.stringify(options.data);
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
export default {
    login
};