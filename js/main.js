'use strict';

// Screen height adjustments
function setHeight() {
    let body = document.getElementById('body');
    let windowHeight = window.innerHeight;

    body.style.height = windowHeight + 'px';
}


// mobile nav menu
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


//code for portfolio image grid
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
};

//add display class onto image
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
};

//remove display class onto image
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
};


$('.button1').click(function(){
    $('.show').fadeIn();
    $('.show').fadeIn("slow");
    $('.show').fadeIn(3000);
});


var rightdiv = document.getElementsByClassName('abouttext')[0].offsetHeight;
var leftdiv = document.getElementsByClassName('colour-block')[0].offsetHeight;
if (leftdiv > rightdiv) {
  document.getElementsByClassName('abouttext')[0].style.height=leftdiv;
}
else
{
    document.getElementsByClassName('colour-block')[0].style.height=rightdiv;
};