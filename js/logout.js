  const logUotButton = document.querySelector('.log_in_button')

logUotButton.addEventListener("click", () => {
    document.location = "http://127.0.0.1:5500/src/index.html"
    sessionStorage.removeItem("ok")
})

window.onload = () => {
    if (sessionStorage.getItem("ok") !== "true") {
        document.location = "http://127.0.0.1:5500/src/index.html"
    }
}


let no_active_delay = 10;
let now_no_active = 1;

let counter = setInterval(() => {
    return now_no_active++
}, 1000)

document.body.addEventListener("mousemove", () => {
    now_no_active = 1;
})

let out = setInterval(() => {
    if (no_active_delay == now_no_active) {
        document.location = "http://127.0.0.1:5500/src/index.html"
        sessionStorage.removeItem("ok")
    }
}, 1000);