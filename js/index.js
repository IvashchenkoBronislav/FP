const logInButton = document.querySelector("#log_in");
const logInName = document.querySelector("#log_in_name");
const logInPasswor = document.querySelector("#log_in_password")
const url = "http://127.0.0.1:5500/src/second.html"




logInButton.addEventListener("click", () => {


    fetch("http://localhost:3000/user", {
        "method": "GET"
    })

    .then(response => response.json())
        .then((result) => {
            const arrName = result.map((arr) => {
                return arr.name;
            })
            const arrPass = result.map((arr) => {
                return arr.pass;
            })

            const nameValue = arrName.find((item) => {
                return item === logInName.value;

            })
            const nameIndex = arrName.indexOf(nameValue);

            const passValue = arrPass[nameIndex];

            if (passValue === logInPasswor.value) {
                document.location = url;
                sessionStorage.setItem("ok", "true")
            } else if (nameIndex < 0) {
                logInName.value = ""
                logInName.placeholder = "Не существует пользователя"
            } else {
                logInPasswor.placeholder = "Не верный пороль";
                logInPasswor.value = ""

            };

        });

})