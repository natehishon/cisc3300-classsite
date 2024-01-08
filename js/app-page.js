/**
 * Dropdown menu
 */

document.addEventListener('DOMContentLoaded', function() {
  const menus = document.querySelectorAll('.navbar-burger');
  const dropdowns = document.querySelectorAll('.navbar-menu');
  
  if (menus.length && dropdowns.length) {
    for (var i = 0; i < menus.length; i++) {
      menus[i].addEventListener('click', function() {
        for (var j = 0; j < dropdowns.length; j++) {
          dropdowns[j].classList.toggle('is-active');
        }
      });
    }
  }
});

console.log('yo')
console.log(location.pathname)

$( document ).ready(function() {
  console.log( "ready!" );
  
  if (location.pathname === '/') {
    console.log('selected')
    $( "#homepage-navbar-item" ).addClass( "is-active" );
  }
  
  if (location.pathname === '/schedule.html') {
    console.log('selected2')
    $( "#schedule-navbar" ).addClass( "is-active" );
  }
  
});