export function post(url, data) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        xhr.onloadend = () => {
            console.log(xhr.responseText);
            resolve(xhr.responseText);
        };
        xhr.onerror = () => {
            reject(xhr.error);
        };
    });
}

export function get(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.send();

        xhr.onloadend = () => {
            console.log(xhr.responseText);
            resolve(xhr.responseText);
        }
        xhr.onerror = () => {
            reject(xhr.error);
        };
    });
}