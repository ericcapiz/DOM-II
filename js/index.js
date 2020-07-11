// Your code goes here



//1.mouseover to change header background color
const mainNav = document.querySelector(".main-navigation")
mainNav.addEventListener("mouseenter",()=>{
    mainNav.style.backgroundColor = "steelblue";
})

//2.mouseleave when leaving the header changes background color again
mainNav.addEventListener("mouseleave",()=>{
    mainNav.style.backgroundColor = "#c2b280";
})

//3.mousedown on bus image to turn upside down
const busImage = document.querySelector(".intro img");
busImage.addEventListener("mousedown",()=>{
    busImage.style.transform = "rotate(.5turn)";
})

//4.key down turns body background color
const body = document.querySelector('body');
document.addEventListener('keydown', () => {
    body.style.backgroundColor = 'steelblue';
})

//5. dblclick changes text color/bkg color
const header4 = document.querySelectorAll('h4')
header4.forEach(h4 =>{
    h4.addEventListener('dblclick',(event)=>{
        event.target.style.color = "steelblue"
        event.target.style.backgroundColor = "#c2b280"
    })
})
//6.copy- alert will pop up for copy
const copy = document.querySelector('body');
copy.addEventListener('copy', () => {
    alert('Busted for copying')
})

//7. load msg will popup on load screen
window.addEventListener('load', () => {
	alert('Welcome');
})
//8. scroll changes all p elements to lime font color
const ptags = Array.from(document.querySelectorAll('p'));
document.addEventListener('scroll', event => {
    ptags.forEach(ptag => {
        ptag.style.color = 'lime';
    })
    
});
//9 & 10 focus & blur to change nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('focus', e => {
    e.target.style.color = 'lime';
    e.target.style.fontSize = '20px';
  });
  link.addEventListener('blur', e => {
    e.target.style.color = 'purple';
    e.target.style.fontSize = '15px';
  });
 
});