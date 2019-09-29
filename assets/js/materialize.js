// function for carousel effect
$(document).ready(function () {
    $('.carousel').carousel();
});

//function for parallax effect:
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });