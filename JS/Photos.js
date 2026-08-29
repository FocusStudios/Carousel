const Container = document.querySelector(".Container");
const wrapper = document.querySelector(".swiper");
const SwiperWrapper = document.querySelector(".swiper-wrapper");
const root = document.documentElement;

function Resize() {

if(window.innerWidth > window.innerHeight){

root.style.setProperty("--i1","100vw");
root.style.setProperty("--i2","360px");
root.style.setProperty("--i3","1200px");

}else{

root.style.setProperty("--i1","100vw");
root.style.setProperty("--i2","360px");
root.style.setProperty("--i3","1200px");

}

if(window.innerHeight < Container.offsetHeight){

Container.style.position = "absolute";
Container.style.top = "0";

}else{

Container.style.position = "relative";

}

}

Resize();
window.addEventListener("resize",Resize);

const slider = document.querySelector(".slider");

const slides = [

 {image: "Photos/photo1.png", date: "Oct 2024", notes: "Sandcastle Day"},
 {image: "Photos/photo2.png", date: "June 2023", notes: "Paper Boat Race"},
 {image: "Photos/photo3.png", date: "Nov 2024", notes: "Family Picnic"},
 {image: "Photos/photo4.png", date: "Sep 2024", notes: "Graduation Party"},
 {image: "Photos/photo5.png", date: "July 2022", notes: "Thomas' Birthday"},
 {image: "Photos/photo6.png", date: "Aug 2023", notes: "Amusement Day"},
 {image: "Photos/photo7.png", date: "Sep 2022", notes: "Daddy's Day"},
 {image: "Photos/photo8.png", date: "Aug 2024", notes: "Summer Vacation"},
 {image: "Photos/photo9.png", date: "Oct 2025", notes: "Art Class"},
 {image: "Photos/photo10.png", date: "Oct 2022", notes: "Swing Day"},
 {image: "Photos/photo11.png", date: "Aug 2023", notes: "Bike Ride"},
 {image: "Photos/photo12.png", date: "Nov 2024", notes: "Family Memories"}

];


slides.forEach((slide,index) => {


    SwiperWrapper.innerHTML += `

    <li class="swiper-slide">

     <img class="image" src="${slide.image}" loading="lazy" alt="">

     <h1>${slide.notes}</h1>

     <h2>${slide.date}</h2>

    </li>

    `;

});


var swiper = new Swiper(".mySwiper", {

spaceBetween:0,

effect:'cards',
grabCursor:true,
centeredSlides:true,
loop:true,
slidesPerView:"auto",

coverflowEffect: {
rotate:0,
stretch:0,
depth:150,
modifier:1,
slideShadows:false,},

pagination: {
el:'.swiper-pagination',
clickable:true,},

navigation: {
nextEl:'.next',
prevEl:'.prev',},

});

