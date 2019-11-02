class Globals {
    static get proxyCommon() {
        if (!Globals._proxyCommon) {
            Globals._proxyCommon = new ProxyCommon();
        }
        return Globals._proxyCommon;
    }

    static get user() {
        return Globals._user;

    }
    static set user(name) {
        Globals._user = name; // TODO: save user on local storage
    }
}