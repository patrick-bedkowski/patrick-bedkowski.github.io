

// - Noel Delgado | @pixelia_me


var nodes = document.querySelectorAll('li#karty'),
    _nodes = [].slice.call(nodes, 0);

var getDirection = function (ev, obj) {
    var w = obj.offsetWidth,
        h = obj.offsetHeight,
        x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
        y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
        d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    return d;
};

var addClass = function (ev, obj, state) {
    var direction = getDirection(ev, obj),
        class_suffix = "";

    obj.className = "";

    switch (direction) {
        case 0: class_suffix = '-top'; break;
        case 1: class_suffix = '-right'; break;
        case 2: class_suffix = '-bottom'; break;
        case 3: class_suffix = '-left'; break;
    }

    obj.classList.add(state + class_suffix);
};

// bind events
_nodes.forEach(function (el) {
    el.addEventListener('mouseover', function (ev) {
        addClass(ev, this, 'in');
    }, false);

    el.addEventListener('mouseout', function (ev) {
        addClass(ev, this, 'out');
    }, false);
});

/*var imgs = new Array("images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg");
function changeBg() {
    var imgUrl = imgs[Math.floor(Math.random() * imgs.length)];
    $('#plans-header').css('background-image', 'url(' + imgUrl + ')');
    $('#plans-header').fadeIn(1000); //this is new, will fade in smoothly
}

function changeBackgroundSmoothly() {
    $('#plans-header').fadeOut(1000, changeBg); //this is new, will fade out smoothly
}

setInterval(changeBackgroundSmoothly, 2000);
*/


/*
var picPaths = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'];
var curPic = -1;
//preload the images for smooth animation
var imgO = new Array();
for (i = 0; i < picPaths.length; i++) {
    imgO[i] = new Image();
    imgO[i].src = picPaths[i];
}

function swapImage() {
    curPic = (++curPic > picPaths.length - 1) ? 0 : curPic;
    imgCont.src = imgO[curPic].src;
    setTimeout(swapImage, 2000);
}

window.onload = function () {
    imgCont = document.getElementById('imgBanner');
    swapImage();
}
*/