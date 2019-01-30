
$(document).ready(function () {

    document.getElementById("demo").onmouseover = function() {mouseOver()};
    document.getElementById("demo").onmouseout = function() {mouseOut()};
    
    function mouseOver() {
      document.getElementById("demo").style.opacity = "1";
    }
    
    function mouseOut() {
      document.getElementById("demo").style.opacity = "0";
    }

})

