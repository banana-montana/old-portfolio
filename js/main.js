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


// code for replicating height of a div in about section
// var rightdiv = document.getElementsByClassName('abouttext')[0].offsetHeight;
// var leftdiv = document.getElementsByClassName('colour-block')[0].offsetHeight;
// if (leftdiv > rightdiv) {
//   document.getElementsByClassName('abouttext')[0].style.height=leftdiv;
// }
// else
// {
//     document.getElementsByClassName('colour-block')[0].style.height=rightdiv;
// };

// Modal - print projects

// FOD 10 Year Poster
$(document).on('click', '.print01', function (event) {
    event.preventDefault();
    $('#print01').iziModal('open');
});

$('#print01').iziModal({
    title: '<h3>FOD 10 Year Poster</h3>',
    // subtitle: '<p>illustration</p>',
    headerColor: '#0BA094',
    borderBottom: false,
    transitionInOverlay: 'fadeIn',
    transitionOutOverlay: 'fadeOut',
    closeButton: true,
});

// Godchecker Redesign
$(document).on('click', '.web01', function (event) {
    event.preventDefault();
    $('#web01').iziModal('open');
});

$('#web01').iziModal({
    title: '<h3>Godchecker Redesign</h3>',
    // subtitle: '<p>illustration</p>',
    headerColor: '#0BA094',
    borderBottom: false,
    transitionInOverlay: 'fadeIn',
    transitionOutOverlay: 'fadeOut',
    closeButton: true,
});

// Fruitea
$(document).on('click', '.print02', function (event) {
    event.preventDefault();
    $('#print02').iziModal('open');
});

$('#print02').iziModal({
    title: '<h3>Fruitea Tea</h3>',
    // subtitle: '<p>illustration</p>',
    headerColor: '#0BA094',
    borderBottom: false,
    transitionInOverlay: 'fadeIn',
    transitionOutOverlay: 'fadeOut',
    closeButton: true,
});

// London Donut Co.
$(document).on('click', '.web02', function (event) {
    event.preventDefault();
    $('#web02').iziModal('open');
});

$('#web02').iziModal({
    title: '<h3>London Donut Co.</h3>',
    // subtitle: '<p>illustration</p>',
    headerColor: '#0BA094',
    borderBottom: false,
    transitionInOverlay: 'fadeIn',
    transitionOutOverlay: 'fadeOut',
    closeButton: true,
});

// London Donut Co.
$(document).on('click', '.web03', function (event) {
    event.preventDefault();
    $('#web03').iziModal('open');
});

$('#web03').iziModal({
    title: '<h3>Pantone website</h3>',
    // subtitle: '<p>illustration</p>',
    headerColor: '#0BA094',
    borderBottom: false,
    transitionInOverlay: 'fadeIn',
    transitionOutOverlay: 'fadeOut',
    closeButton: true,
});