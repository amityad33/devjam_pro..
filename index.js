var images = [
    "school.jpg",
    "lab1.jpg",
    "lab2.jpg",
    "vaccinate.jpg"
];
var i = 0;

function slides() {
    document.getElementById("slideimg").src = images[i];
    if (i < (images.length - 1))
        i = i + 1;
    else
        i = 0;

}
setInterval(slides, 3000)