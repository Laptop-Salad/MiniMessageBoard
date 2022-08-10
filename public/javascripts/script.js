function toggleLikes(elem) {
    if (elem.getAttribute('src') == "images/heart.png") {
        elem.src = "images/heart-solid.png"
    } else {
        elem.src = "images/heart.png";
    }
}