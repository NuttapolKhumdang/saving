function getLocalStorage(k, json = false) {
    return json
        ? JSON.parse(window.localStorage.getItem(k))
        : window.localStorage.getItem(k);
}

function setLocalStorage(k, v, json = false) {
    return json
        ? window.localStorage.setItem(k, JSON.stringify(v))
        : window.localStorage.setItem(k, v);
}

function getQuery(k) {
    return new URLSearchParams(window.location.search).get(k);
}

function redirect(v) {
    window.location.href = v;
}