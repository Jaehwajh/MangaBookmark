// Popup Window

let modal = document.getElementById("modal");
function modalHandler(val) {
    if (val) {
        fadeIn(modal);
    } else {
        fadeOut(modal);
    }
}
function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
}
function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "flex";
    (function fade() {
        let val = parseFloat(el.style.opacity);
        if (!((val += 0.2) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}


// List Changing
const completed = document.getElementById('completed')
const all = document.getElementById('all')
const current = document.getElementById('current')

function showCompleted() {
    if(completed.style.display === "none"){
        completed.style.display = "block"
        all.style.display = "none"
    }else{
        completed.style.display = "none"
    }
}

function showAll() {
    if(all.style.display === "none"){
        all.style.display = "block"
        completed.style.display = "none"
    }else{
        all.style.display = 'none'
    }
}