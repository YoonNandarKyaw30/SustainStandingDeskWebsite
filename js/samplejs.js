// navbar acitve
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navLink.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});
// End navbar active
/*SHOW MENU */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}
// End Mobile Section
// access key for title
document.addEventListener('DOMContentLoaded', function () {
  const navbarLinks = document.querySelectorAll('.nav-item a');

  navbarLinks.forEach(link => {
      const accessKey = link.getAttribute('accesskey');
      link.setAttribute('title', `On Windows: Press Alt + ${accessKey}. On Mac: Press Control + Option + ${accessKey}.`);
  });
});
//pop-up start
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
// pop-up end