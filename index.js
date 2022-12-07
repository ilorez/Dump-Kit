
const containerOfKeys = document.querySelector("[data-keys]")
const keys = [...containerOfKeys.children];
const sounds = [...document.querySelector("[data-sound]").children]
console.log(sounds)

// funtion give active class to letter that clicked by his
function removeAct() {
    keys.forEach(ele => {
        ele.classList.remove("active")
    })


}
removeAct()
function active(index) {
    if (index > keys.length || index < 0) {
        return
    } else {
        removeAct()
        keys[index].classList.add('active')
    }

}
containerOfKeys.addEventListener('click', e => {
    let t = -1;
    if (e.target.matches(".a")) {
        t = 0
    }
    if (e.target.matches(".s")) {
        t = 1
    }
    if (e.target.matches(".d")) {
        t = 2
    }
    if (e.target.matches(".f")) {
        t = 3
    }
    if (e.target.matches(".g")) {
        t = 4
    }
    if (e.target.matches(".h")) {
        t = 5
    }
    if (e.target.matches(".j")) {
        t = 6
    }
    if (e.target.matches(".k")) {
        t = 7
    }
    if (e.target.matches(".l")) {
        t = 8
    }
    if (t === -1) {
        return
    }
    active(t)
    sounds[t].currentTime = 0;
    sounds[t].play()
    setTimeout(removeAct, 50);


})
addEventListener("keypress", event => {
    let t = -1;
    if (event.key === 'a') {
        t = 0
    }
    if (event.key === 's') {
        t = 1
    }
    if (event.key === 'd') {
        t = 2
    }
    if (event.key === 'f') {
        t = 3
    }
    if (event.key === 'g') {
        t = 4
    }
    if (event.key === 'h') {
        t = 5
    }
    if (event.key === 'j') {
        t = 6
    }
    if (event.key === 'k') {
        t = 8
    }
    if (event.key === 'l') {
        t = 8
    }
    if (t === -1) {
        return
    }
    active(t)
    sounds[t].currentTime = 0;
    sounds[t].play()
    setTimeout(removeAct, 50);
});



