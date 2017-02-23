/*jshint esversion: 6 */
let noop = () => { };
import request from '../methods/request';
export const showAlert = ({dispatch}, msg = '') => {
    if (!msg) {
        return false;
    }
    dispatch('SHOW_ALERT', {
        type: alert,
        msg,
        onClose: noop
    });
}
export const getData = () => {
    request.user.get().then(res => {
        this.data.rows = res.data;
    });
}
export const showConfirm = ({dispatch, data = {}}) => {
    if (!data.msg) {
        return false;
    }
    data.type = 'confirm';
    if (typeof data.onClose != 'function') {
        data.onClose = noop;
    }
    if (typeof data.onConfirm != 'function') {
        data.onConfirm = noop;
    }
    dispatch('SHOW_ALERT', data);
}