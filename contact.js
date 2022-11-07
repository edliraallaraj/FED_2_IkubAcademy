/* Top button //Get the button*/
let mybutton = document.getElementById("myBtn");
// When he user is scrolling down 20 px from the top of website, show the button //
window.onscroll = function () {scrollFunction ()};
function scrollFunction () {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
{ 
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
   
}
}
// When the user click on button scroll up to the top of website //
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}



/*Log in , Register Form with JS function */
const switchers = 
[...document.querySelectorAll('.switcher')]
switchers.forEach(item => {
item.addEventListener('click', function() {
switchers.forEach(item => 
item.parentElement.classList.remove('is-active'))
this.parentElement.classList.add('is-active')
})
})