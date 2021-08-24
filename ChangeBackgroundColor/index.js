var button = document.getElementById("button");
let colors = ["red", "blue", "purple", "green", "yellow", "orange", "pink", "teal", "wheat", "black"];

function changeColor() {
    document.body.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)]
}

button.addEventListener("click", changeColor)