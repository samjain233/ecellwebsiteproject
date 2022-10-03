let hamburgerbtn = document.getElementById("hamburger").addEventListener("click",showmenu);
let close = document.getElementById("close");
close.addEventListener("click",collapsemenu);

function showmenu(){
    console.log("button clicked");
    document.querySelector(".body").style.display="none";
    document.querySelector(".footer").style.display="none";
    let stickyBtn=document.querySelectorAll(".sticky-button");
    for(let i=0;i<stickyBtn.length;i++)
    {
        stickyBtn[i].style.display="none";
    }
    document.getElementById("hamburger").style.display="none";
    document.getElementById("close").style.display="inline";

    //unhiding hamburger menu
    document.querySelector(".menuHamburger").style.display="block";
}

function collapsemenu(){
    console.log("button clicked");
    document.querySelector(".body").style.display="block";
    document.querySelector(".footer").style.display="flex";
    let stickyBtn=document.querySelectorAll(".sticky-button");
    for(let i=0;i<stickyBtn.length;i++)
    {
        stickyBtn[i].style.display="block";
    }
    document.getElementById("hamburger").style.display="inline";
    document.getElementById("close").style.display="none";

    //unhiding hamburger menu
    document.querySelector(".menuHamburger").style.display="none";
}