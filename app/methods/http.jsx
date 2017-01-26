/*jshint esversion: 6 */

function _send(type,options){
    let defaultGetOption = {
        type: type,
        cache: false,
        dataType: "json",
        success: function (res) {
            if (res.code && res.code === -1) {
                window.location = "/login";
            }
        },
        error: function (err) {
            console.log(err);
        }
    };
    let newOption = $.extend({}, defaultGetOption, option);
    return $.ajax(newOption);

}

export function Get(option) {
    return _send('GET',option);
}
export function Post(option) {
    return _send('POST',option);
}
export function Patch(option) {
    return _send('PATCH',option);
}
export function Delete(option) {
    return _send('DELETE',option);
}

export default {
    Get,
    Post,
    Patch,
    Delete
};