document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

var noButton = document.getElementById("noButton");
noButton.addEventListener("mouseover", moveButton);


function moveButton() {
    var randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    var randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}

noButton.addEventListener("mouseout", function() {
    noButton.style.position = "static";
});

function touchMoveButton() {
    moveButton();
}

if ("ontouchstart" in window) {
    noButton.addEventListener("touchstart", touchMoveButton);
} else {
    noButton.addEventListener("click", function(event) {
        event.preventDefault();
        moveButton();
    });
}