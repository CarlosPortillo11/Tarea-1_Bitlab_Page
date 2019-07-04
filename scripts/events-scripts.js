$(document).ready(function(){
    console.log("probando");

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
}

//$(document).scroll(function(){
  //  var $nav = $(".bg-transparent");
    //$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//})

});
