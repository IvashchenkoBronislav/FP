let wisCycle = document.querySelector(".cycle_wisebel");
let img = document.querySelector(".img");
let styleImg = getComputedStyle(img);

const step = img.width + 4;
const start = 0;
const end = `-${step*2}px`


const infiniti = () => {
    wisCycle.style.left = `${-step}px`
    setInterval(() => {
        let nawPos = parseFloat(wisCycle.style.left)
        if (wisCycle.style.left == end) {
            wisCycle.style.left = `${start}px`
        } else {
            wisCycle.style.left = `${nawPos - step}px`
        }
    }, 5010);
};

window.onload = infiniti();