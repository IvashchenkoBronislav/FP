const modailLogIn = document.querySelector(".modailLogIn");
const modailLogIn_off = document.getElementById("modailLogIn__off")
const modailRegist = document.querySelector(".modailReg")
const regButton = document.getElementById("reg_on")
const regOff = document.getElementById("modailReg__off")

let nameRegI = document.getElementById("reg_name");
let passRegI = document.getElementById("reg_password");
let passCanfRegI = document.getElementById("reg_password_confirm");

let logInName = document.getElementById('log_in_name');
let logInPass = document.getElementById('log_in_password');

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
};

let reg_on = ()=>{
    onReg === true;
    modailRegist.style = "display:flex";

    onLogIn = false;
    modailLogIn.style = "display:none";
};

let reg_off = ()=>{
    onReg === false;
    modailRegist.style = "display:none";

    onLogIn = false;
    modailLogIn.style = "display:none";

    passRegI.value = ""
    passCanfRegI.value = ""
    nameRegI.value = ""
};

let logIn_off = ()=>{
    onLogIn = false;
    modailLogIn.style = "display:none";

    logInName.value=""
    logInPass.value=""
};

document.querySelector(".log_in_button").addEventListener("click", () => {
    modail_off_on();
});

regButton.addEventListener("click", ()=>{
    reg_on();
});

modailLogIn_off.addEventListener("click",()=>{
    logIn_off();
    
});

regOff.addEventListener("click",()=>{
    reg_off()
});

document.getElementById("reg_buttono_cansel").addEventListener('click',()=>{
    reg_off()
});

//=================== <> =============================
let locStorage = window.localStorage
let reginfo = {};
let localKay = locStorage.getItem("key");

let locKayGen = () =>{
    console.log(localKay)
    if(localKay === null){
        locStorage.setItem("key","0")
    }else{
        locStorage.setItem("key",localKay++)
    }
}

let saveAccount = ()=>{

    let jsonRegInfo = JSON.stringify(reginfo)
    locStorage.setItem(localKay,jsonRegInfo)
    locKayGen()
    
};
//=================== <> =============================
let error = document.querySelector(".log_error");
let errorOff = document.getElementById("log_error__off");
let errorLog = document.getElementById("error__inf");

let regConf = document.getElementById("reg_start");

let regError;

let error_act = (f)=>{
    errorLog.innerText = f;
}

errorOff.addEventListener("click", ()=>{
    error.style = "display:none"
})


let registration = () => {

    if(nameRegI.value.length >=3){
        reginfo.name = nameRegI.value;
        if(passRegI.value.length != 0){
            if(passRegI.value === passCanfRegI.value){
                if(passRegI.value.length >= 6){
                    reginfo.pass = passRegI.value
                    error.style = "display:none"
                    reg_off()
                    saveAccount()
                }else{
                    error_act("The password is too short")
                    error.style = "display:flex"
                }
            }else{
                error_act("Password confirmation does not match")
                error.style = "display:flex"
            }    
        }else{
            error_act("Enter password")
            error.style = "display:flex"
        }
    }else{
        error_act("Name is too short")
        error.style = "display:flex"
    }
    
}

regConf.addEventListener("click", ()=>{
    registration()
    console.log(reginfo)
})


