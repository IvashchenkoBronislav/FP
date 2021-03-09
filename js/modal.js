const modailLogIn = document.querySelector(".modailLogIn");
const modailLogIn_off = document.getElementById("modailLogIn__off")
const modailRegist = document.querySelector(".modailReg")
const regButton = document.getElementById("reg_on")
const regOff = document.getElementById("modailReg__off")

let onLogIn = false;
let onReg = false;

let modail_off_on = () =>{
    if (onLogIn === false && onReg === false) {
        onLogIn = true;
        onReg = false;
        modailLogIn.style = "display:flex";
        modailRegist.style = "display:none";
    }else if(onLogIn === true || onReg === true){
        onLogIn = false;
        onReg = false;
        modailLogIn.style = "display:none";
        modailRegist.style = "display:none";
    }
    console.log(onReg,onLogIn )
}

let reg_on = ()=>{
    onReg === true;
    modailRegist.style = "display:flex";

    onLogIn = false;
    modailLogIn.style = "display:none";
}

let reg_off = ()=>{
    onReg === false;
    modailRegist.style = "display:none";

    onLogIn = false;
    modailLogIn.style = "display:none";
}

let logIn_off = ()=>{
    onLogIn = false;
    modailLogIn.style = "display:none";
}

document.querySelector(".log_in_button").addEventListener("click", () => {
    modail_off_on();
})

regButton.addEventListener("click", ()=>{
    reg_on();
})

modailLogIn_off.addEventListener("click",()=>{
    logIn_off()
})

regOff.addEventListener("click",()=>{
    reg_off()
})

