/*jshint esversion: 6 */
import _ from 'lodash';
var cookie = '';
var version = '/v1/api/';

export default {
    login(data) {
        return _send('POST', {
            url: 'session',
            data
        });
    },
    user: {
        get(id) {
            id = id ? id : '';
            return _send('GET', {
                url: 'user/' + id
            });
        },
        update(id, data) {
            data = data ? data : id;
            return _send('PATCH', {
                url: 'user/' + id,
                data
            });
        },
        create(data) {
            data = data;
            return _send('POST', {
                url: 'user',
                data
            });
        },
        delete(id) {
            return _send('DELETE', {
                url: 'user/' + id
            });
        }

    }
};
function _send(type, options) {
    if (typeof options === 'string') {
        options = { url: version + options };
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
    newOptions.url = version + options.url;
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