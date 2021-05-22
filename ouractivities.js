var images = [
    "activity1.jpg",
    "activity2.jpg",
    "activity3.jpg",
    "activity4.jpg"
];
var i = 0;

function slides() {
    document.getElementById("slideimg").src = images[i];
    if (i < (images.length - 1))
        i = i + 1;
    else
        i = 0;

}
setInterval(slides, 2000)