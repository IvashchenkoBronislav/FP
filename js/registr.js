const buttonReg = document.querySelector("#buttomRegistation");
const nameUser = document.querySelector("#nameReg");
const passUser = document.querySelector("#passReg");
const confPassUser = document.querySelector("#comfPassReg");

buttonReg.addEventListener("click", () => {
    fetch("http: //localhost:3000/user", {
        method: 'PUT', // или 'PUT'
        body: JSON.stringify({ "name": `${passUser.value}`, "pass": `${passUser.value}` }), // данные могут быть 'строкой' или {объектом}!
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = response.json();
    console.log('Успех:', JSON.stringify(json));



    console.log(nameUser.value);
    console.log(passUser.value);
    console.log(confPassUser.value);
})