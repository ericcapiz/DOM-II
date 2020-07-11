// Your code goes here
//mouseover to change header background color

const mainNav = document.querySelector(".main-navigation")
mainNav.addEventListener("mouseenter",()=>{
    mainNav.style.backgroundColor = "steelblue";
})

//mouseleave when leaving the header changes background color again
mainNav.addEventListener("mouseleave",()=>{
    mainNav.style.backgroundColor = "#c2b280";
})

//mousedown on bus image to turn upside down

const busImage = document.querySelector(".intro img");
busImage.addEventListener("mousedown",()=>{
    busImage.style.transform = "rotate(.5turn)";
})


busImage.addEventListener("mouseup",()=>{
    busImage.style.transform = "rotate(.5turn)";
})




//  dblclick changes text color/bkg color
const header4 = document.querySelectorAll('h2, h4')
header4.forEach(h4 =>{
    h4.addEventListener('dblclick',(event)=>{
        event.target.style.color = "steelblue"
        event.target.style.backgroundColor = "#c2b280"
    })
})
