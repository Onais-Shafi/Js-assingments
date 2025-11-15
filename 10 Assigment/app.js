function Generate() {

    let values = "1234abcd@#!$"


    let passward = ""



    for (let i = 0; i < 11; i++) {

        let randomNum = Math.floor(Math.random() * values.length)

        passward = passward + values[randomNum]


    }
    console.log("Password-->", passward);
}




