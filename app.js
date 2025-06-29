// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


const dropdown=document.querySelector('.dropdown');
const upArrow=document.querySelector('.up-arrow');
const downArrow=document.querySelector('.down-arrow');
const about=document.querySelector('.about-dropdown');

dropdown.addEventListener('click',function(e){
  downArrow.classList.toggle('hidden');
  upArrow.classList.toggle('block');
  about.classList.toggle('block');

})