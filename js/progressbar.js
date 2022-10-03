let v = document.querySelectorAll(".progress");
let width = [];
for (let i = 0; i < v.length; i++) {
    width.push(Number((v[i].style.width).slice(0, 2)));
}



var len = 0;
let timeinterval = setInterval(increaseLength, 30);


function increaseLength() {
    if(len==width[1])
    {
        clearInterval(timeinterval);
    }
    if(len<=width[0])
    {
        v[0].style.width = len + "%";
    }
    if(len<=width[2])
    {
        v[2].style.width = len + "%";
    }

    
    v[1].style.width = len + "%";
    len++;
}
