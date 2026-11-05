var swiper = new Swiper(".swiper", {

spaceBetween:0,
effect:'coverflow',
grabCursor:true,
centeredSlides:true,
slidesPerView:'auto',
loop:true,


autoplay: {
delay:3000,              // Time between slides (milliseconds)
disableOnInteraction:false, // Continue autoplay after user swipes
pauseOnMouseEnter:false,     // Pause when mouse is over the swiper
reverseDirection:false,     // Autoplay backwards
stopOnLastSlide:false,      // Only applies when loop: false
},

autoplay:false,

coverflowEffect: {
rotate:0,
stretch:0,
depth:150,
modifier:1,
slideShadows:false,},

pagination: {
el:'.swiper-pagination',
clickable:true,
dynamicBullets:true,},

navigation: {
nextEl:'.right',
prevEl:'.left',
disabledClass:'disabled'},

});
