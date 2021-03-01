const modailLogIn = document.querySelector(".modailLogIn");
const modailRegist = document.querySelector(".modailRegistation")

let toggle1 = true;
let toggle2 = true;





document.querySelector(".log_in_button").addEventListener("click", () => {
    if (toggle1 === true && toggle2 === true) {
        toggle1 = false;
        modailLogIn.style = "display:block"

    } else {
        toggle1 = true;
        toggle2 = true;
        modailLogIn.style = "display:none"
            // modailRegist.style = "display:none";

    }
})

document.querySelector("#modailLogIn__off").addEventListener("click", () => {
    modailLogIn.style = "display:none";
    // modailRegist.style = "display:none";
    toggle1 = true;
    toggle2 = true;
})

// document.querySelector("#modailR__off").addEventListener("click", () => {
//     modailLogIn.style = "display:none";
//     modailRegist.style = "display:none";
//     toggle1 = true;
//     toggle2 = true;

// })

// document.querySelector("#buttomRegistation").addEventListener("click", () => {
//     modailRegist.style = "display:none";
//     toggle2 = true;
// })

// document.querySelector("#reg_on").addEventListener("click", () => {
//     if (toggle1 === false && toggle2 === true) {
//         modailLogIn.style = "display:none";
//         modailRegist.style = "display:block";
//         toggle1 = true;
//         toggle2 = false;
//     }
// })