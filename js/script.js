// 01. Test Alert
// 02. iScroll
// 03. Footer Nav actions

// 01. Test Alert
//$(document).ready(function(){alert("Main JS Working");});

// 02. iScroll
var myScroll;
function loaded () {
  myScroll = new IScroll('.wrapper', { mouseWheel: true });
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

// 03. Footer Nav actions
$(document).ready(function(){
  var footLink = $('.footerLink');
  var footLinkProp = $('.footerLink.prop');
  var footLinkNav = $('.footerLink.nav');
  var footMenuProp = $('.footerMenu.prop');
  var footMenuNav = $('.footerMenu.nav');

  footLinkProp.on('click',function(){
    if(footLinkProp.hasClass('current')){
      footLinkProp.removeClass('current');
      footMenuProp.removeClass('open');
    }else{
      footLink.removeClass('current');
      footMenuNav.removeClass('open');
      footLinkProp.addClass('current');
      footMenuProp.addClass('open');
    }
  });
  footLinkNav.on('click',function(){
    if(footLinkNav.hasClass('current')){
      footLinkNav.removeClass('current');
      footMenuNav.removeClass('open');
    }else{
      footLink.removeClass('current');
      footMenuProp.removeClass('open');
      footLinkNav.addClass('current');
      footMenuNav.addClass('open');
    }
  });
});

// XX. Mark's scripts
/*
$(document).ready(function(){

    // Mobile Menu
    $('.footer-navigation').on('click', function() {
        var menu = $('.mobile-menu');
        if (menu.hasClass('show')) {
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }
    });

    // Mobile Menu
    $('.footer-properties').on('click', function() {
        var menu = $('.mobile-search');
        if (menu.hasClass('show')) {
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }
    });


});
//*/