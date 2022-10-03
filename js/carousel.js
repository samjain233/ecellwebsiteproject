var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

let dataImagePath = ["images/c3.png","images/c4.png","images/c5.png"];
let data1 =["Weekly Contest 291","Weekly Contest 290","Weekly Contest 85"];

var c = 0;

var t;

function myFunction(x) {
  if (x.matches) { // If media query matches
    console.log("carousel runs");
    
    t =setInterval(() => {
      change(c);
      c++;
      if(c==3)
      c=0;
    }, 5000);

    function change(x){
      document.getElementById("f34").setAttribute("src", dataImagePath[x]);
      document.getElementById("r23w").innerHTML=data1[x];
    }

  } else {
    console.log("things remains asitise");
    clearInterval(t);
  }
}

