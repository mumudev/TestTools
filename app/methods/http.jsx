/*jshint esversion: 6 */
export function Get(option) {
    let defaultGetOption = {
        type: "GET",
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

export function Post(option) {
    let defaultPostOption = {
        type: "POST",
        cache: false,
        dataType: "json",
        data: option.data,
        success: function (res) {
            if (res.code && res.code === -1) {
                window.location = "/login";
            }
        },
        error: function (err) {
            console.log(err);
        }
    };
    let newOption = $.extend({}, defaultPostOption, option);
    return $.ajax(newOption);
}
export function Patch(option) {
    let defaultPostOption = {
        type: "PATCH",
        cache: false,
        dataType: "json",
        data: option.data,
        success: function (res) {
            if (res.code && res.code === -1) {
                window.location = "/login";
            }
        },
        error: function (err) {
            console.log(err);
        }
    };
    let newOption = $.extend({}, defaultPostOption, option);
    return $.ajax(newOption);
}
export function Delete(option) {
    let defaultPostOption = {
        type: "delete",
        cache: false,
        dataType: "json",
        data: option.data,
        success: function (res) {
            if (res.code && res.code === -1) {
                window.location = "/login";
            }
        },
        error: function (err) {
            console.log(err);
        }
    };
    let newOption = $.extend({}, defaultPostOption, option);
    return $.ajax(newOption);
}
export default {
    Get,
    Post,
    Patch,
    Delete
};