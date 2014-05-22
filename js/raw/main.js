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
var footLink = $('.footerLink');
var footLinkProp = $('.footerLink.prop');
var footLinkNav = $('.footerLink.nav');
var footMenu = $('.footerMenu');
var footMenuProp = $('.footerMenu.prop');
var footMenuNav = $('.footerMenu.nav');

$(document).ready(function(){

  function openFootMenu(button, menu){
    if(button.hasClass('current')){
      button.removeClass('current');
      menu.removeClass('open');
    }else{
      window.footLink.removeClass('current');
      window.footMenu.removeClass('open');
      button.addClass('current');
      menu.addClass('open');
    }
  }
  footLinkProp.on('click',function(){
    openFootMenu(footLinkProp,footMenuProp);
  });
  footLinkNav.on('click',function(){
    openFootMenu(footLinkNav,footMenuNav);
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