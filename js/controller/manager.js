class Manager {
    constructor() {}
    static get instance() {
        if (!Manager._instance) {
            Manager._instance = new Manager();
        }
        return Manager._instance;
    }
    initProject() {
        // TODO: get user from local storage
        if (Globals.user) {
            // move to main
        } else {
            this.page = new Login();
        }
    }
}