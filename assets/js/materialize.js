// function for carousel effect
$(document).ready(function () {
    $('.carousel').carousel();
    $('.parallax').parallax({ speed: 0.2 });
    $(".dropdown-trigger").dropdown({ hover: false });
});

// dropdown funtion in nav-bar
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
    console.log(instances);
});