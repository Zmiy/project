class ProxyCommon {
    constructor() {
        this.BASE_URL = "http://nvfjfhdfeej/";
        this.LOGIN = "login";
    }
    loadHtml(htmlFile, elementId) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', htmlFile, true);
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;
            if (this.status !== 200) return;
            document.getElementById(elementId).innerHTML = this.responseText;
        };
        xhr.send();
    }
    login(name, password) {
        new ApiRequest("GET", this.BASE_URL + this.LOGIN + "/" + name + "&" + password, (data) => this.onLogin(data), () => this.onError());
    }
    onLogin(data) {
        // event to manager
        
    }
}