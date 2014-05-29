// 01. Test Alert
// 02. Suck It!!!

// 01. Test Alert
//$(document).ready(function(){alert("Main JS Working");});

// 02. Suck It!!!
var cockIn = $('.kickItoff.in');
var cockOut = $('.kickItoff.out');
var cock = $('.cock')
var youKissYourMotherWithThatMouth = $('.cleanItUp');
var chooseYourWeapon = $('.chooseYourWeapon');
var topHalf = $('.jezTop');

function stickItIn(){
  cock.addClass('suck');
  if(cock.hasClass('bbc')){
    topHalf.addClass('eyes');
  }
}
function pullItOut(){
  cock.removeClass('suck');
  topHalf.removeClass('eyes');
}

$(document).ready(function(){
  cockIn.on('click',function(){
    stickItIn();
  });
  cockOut.on('click',function(){
    pullItOut();
  });
  chooseYourWeapon.on('change',function(){
    cock.removeClass( "naughty bbc" ).addClass($(this).val());
  });
});

// 03. Granny-safe version
$(document).ready(function(){
  youKissYourMotherWithThatMouth.on('click',function(){
    if(cock.hasClass('naughty') || cock.hasClass('bbc')) {
      cock.removeClass('naughty bbc');
    } else {
      cock.addClass('naughty')
      chooseYourWeapon.val('naughty');
    }
    chooseYourWeapon.toggleClass('show');
  });
});