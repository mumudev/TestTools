/*jshint esversion: 6 */
import _ from 'lodash';
var cookie = '';
var version = '/v1/api/';

export default {
    getUuid() {
        return 'xxxxxxxxxxxx4xxxyxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
};