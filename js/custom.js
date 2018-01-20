var bg = document.getElementById("archetype-wheel");

window.onresize = function() {
    /* Compare values and set width/height based on higher value */
    var max = Math.max(window.innerWidth, window.innerHeight);
    bg.style.width = 2.5*max + "px";
    bg.style.height = 2.5*max + "px";
    bg.style.marginTop = -1.25*max + "px";
    bg.style.marginLeft = -1.25*max + "px";
}
window.onresize();
