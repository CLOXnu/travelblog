function read_all(successCallback, errorCallback) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "read/", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            try {
                successCallback(JSON.parse(xmlhttp.responseText));
            } catch (e) {
                errorCallback(e);
            }
        }
    }
}

function read(path, successCallback, errorCallback) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "read/?path=" + path, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            try {
                successCallback(xmlhttp.responseText);
            } catch (e) {
                errorCallback(e);
            }
        }
    }
}

function read_json(path, successCallback, errorCallback) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "read/?path=" + path, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            try {
                successCallback(JSON.parse(xmlhttp.responseText));
            } catch (e) {
                errorCallback(e);
            }
        }
    }
}

function read_info(path="", successCallback, errorCallback) {
    const xmlhttp = new XMLHttpRequest();
    if (path.length === 0)
        xmlhttp.open("GET", "read/info/", true);
    else
        xmlhttp.open("GET", "read/info/?path=" + path, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            try {
                successCallback(JSON.parse(xmlhttp.responseText));
            } catch (e) {
                errorCallback(e);
            }
        }
    }
}
