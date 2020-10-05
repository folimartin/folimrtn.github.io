M.AutoInit();

AOS.init({
    easing: 'ease-out-back',
    duration: 100
});
// hero sliding blinking problem solved
var images = new Array()

function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}
preload("../img/profile/me.jpg", "../img/profile/me1.jpg", "../img/profile/me3.jpg")