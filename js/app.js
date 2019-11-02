function check(form) {
    if (form.userid.value === "stav rokach" && form.pswrd.value == "s123456") {
        window.open('/pages/main.html')
    } else {
        alert("Wrong")
    }
}