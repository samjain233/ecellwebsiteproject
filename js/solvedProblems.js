//javascript to change the data inside the solved Problems
document.getElementById("hover").addEventListener("mouseover", mouseOver);
document.getElementById("hover").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("jsSolvedProblem").innerHTML="0.6%";
}

function mouseOut() {
    document.getElementById("jsSolvedProblem").innerHTML="15";
}