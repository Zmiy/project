class Login {
    constructor() {
        Globals.proxyCommon.loadHtml("/../pages/login.html", "main")

        // TODO: addEvent
        //window.onload = () => {        }
        document.getElementById("main").addEventListener("load", this.MyFunc());
        
    }
    
    MyFunc(){
        document.getElementById("btnLogin").addEventListener("click", this.btnClickEventHandler());        
    };

    btnClickEventHandler(){
        const login = document.getElementById("login").value;
        const password =  document.getElementById("pswrd").value;
        alert(login+"&"+password);
    }

    destroy() {
        // TODO: removeEvent
    }
}