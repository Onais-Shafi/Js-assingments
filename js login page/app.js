function checkAddress() {
    let passinput = document.getElementById("email")
    emailvalue = passinput.value

    if (emailvalue.trim() === "") {

        alert("Email are requried")
    } else {
        alert("Login as email " + emailvalue)
    }
    let passward = document.getElementById("password")
    let passvalue = passward.value

    if (passvalue.trim() === "") {

        alert("passward are requried")
    } else {
        alert("login as passward" + passvalue)
    }
}




