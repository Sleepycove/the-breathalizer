// 01. Test Alert
// 02. Suck It!!!

// 01. Test Alert
//$(document).ready(function(){alert("Main JS Working");});

// 02. Suck It!!!
var cockIn = $('.kickItoff.in');
var cockOut = $('.kickItoff.out');
var cock = $('.cock');

function stickItIn(){
  cock.addClass('suck');
}
function pullItOut(){
  cock.removeClass('suck');
}

$(document).ready(function(){
  cockIn.on('click',function(){
    stickItIn();
  });
  cockOut.on('click',function(){
    pullItOut();
  });
});