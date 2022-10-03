document.getElementById("card1").addEventListener("mouseover", mouseover1);
document.getElementById("card1").addEventListener("mouseout", mouseout1);
document.getElementById("card2").addEventListener("mouseover", mouseover2);
document.getElementById("card2").addEventListener("mouseout", mouseout2);

function mouseover1(){
    document.getElementById("colourChange1").style.color="#0F74D9";
}

function mouseout1(){
    document.getElementById("colourChange1").style.color="#FFFFFF";
}

function mouseover2(){
    document.getElementById("colourChange2").style.color="#0F74D9";
}

function mouseout2(){
    document.getElementById("colourChange2").style.color="#FFFFFF";
}