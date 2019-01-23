/**
 * Function Set cookies for some time in hours
 * @param name
 * @param value
 * @param hours
 */
function setCookie(name, value, hours) {
    var expires = "";
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + (hours*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

/**
 * Function get cookies by name
 * @param name
 * @returns {any}
 */
function readCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

/**
 * Function delete cookies by name
 * @param name
 */
function deleteCookie(name) {
    setCookie(name, "", {
        expires: -1
    })
}