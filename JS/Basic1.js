const Container = document.querySelector(".container");
const carousel = document.querySelector(".carousel");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const root = document.documentElement;

const slides = [

 {image: "Hotels/hotel1.png", title: "Park Central Hotel", location: "Manhattan, New York", icon1: "Hotels/breakfast.svg",  text1: "Breakfast", icon2: "Hotels/service.svg",  text2: "Service", icon3: "Hotels/gym.svg",  text3: "Gym", price: "$220", review: "4.5", number: "(153 reviews)", badge: "Hotels/like.svg", text: "Popular", color: "#A0763A"},
 {image: "Hotels/hotel2.png", title: "City Club Hotel", location: "Manhattan, New York", icon1: "Hotels/wifi.svg",  text1: "WiFi", icon2: "Hotels/spa.svg",  text2: "Spa", icon3: "Hotels/pool.svg",  text3: "Pool", price: "$170", review: "4.6", number: "(168 reviews)", badge: "Hotels/like.svg", text: "Popular", color: "#A0763A"},
 {image: "Hotels/hotel3.png", title: "Riverside Tower", location: "Upper West Side, New York", icon1: "Hotels/service.svg",  text1: "Service", icon2: "Hotels/gym.svg",  text2: "Gym", icon3: "Hotels/spa.svg",  text3: "Spa", price: "$160", review: "4.5", number: "(114 reviews)", badge: "Hotels/ticket.svg", text: "Value", color: "#002352"},
 {image: "Hotels/hotel4.png", title: "Hotel Scherman", location: "Midtown West, New York", icon1: "Hotels/wifi.svg",  text1: "WiFi", icon2: "Hotels/breakfast.svg",  text2: "Breakfast", icon3: "Hotels/pool.svg",  text3: "Pool", price: "$250", review: "4.8", number: "(179 reviews)", badge: "Hotels/diamond.svg", text: "Luxury", color: "#310949"},
 {image: "Hotels/hotel5.png", title: "Arlo Midtown", location: "Manhattan, New York", icon1: "Hotels/gym.svg",  text1: "Gym", icon2: "Hotels/spa.svg",  text2: "Spa", icon3: "Hotels/wifi.svg",  text3: "WiFi", price: "$280", review: "4.7", number: "(98 reviews)", badge: "Hotels/like.svg", text: "Popular", color: "#A0763A"},
 {image: "Hotels/hotel6.png", title: "Royalton Hotel", location: "Manhattan, New York", icon1: "Hotels/service.svg",  text1: "Service", icon2: "Hotels/pool.svg",  text2: "Pool", icon3: "Hotels/gym.svg",  text3: "Gym", price: "$230", review: "4.6", number: "(126 reviews)",badge: "Hotels/ticket.svg", text: "Value", color: "#002352"},
 {image: "Hotels/hotel7.png", title: "West Side YMCA", location: "Upper West Side, New York", icon1: "Hotels/wifi.svg",  text1: "WiFi", icon2: "Hotels/breakfast.svg",  text2: "Breakfast", icon3: "Hotels/service.svg",  text3: "Service", price: "$110", number: "(134 reviews)", review: "4.5", badge: "Hotels/ticket.svg", text: "Value", color: "#002352"},
 {image: "Hotels/hotel8.png", title: "The Empire Hotel", location: "Upper West Side, New York", icon1: "Hotels/pool.svg",  text1: "Pool", icon2: "Hotels/breakfast.svg",  text2: "Breakfast", icon3: "Hotels/spa.svg",  text3: "Spa", price: "$280", review: "4.9", number: "(157 reviews)",badge: "Hotels/diamond.svg", text: "Luxury", color: "#310949"}
  
];


slides.forEach(slide => {

    carousel.innerHTML += `

    <li class="card ${slide.state}">

     <img class="image" src="${slide.image}">

     <div class="badge" style="background:${slide.color};">
      <img src="${slide.badge}">
      <span>${slide.text}</span>
     </div>

     <div class="details">

      <section class="info">

       <h1 class="title">${slide.title}</h1>

       <div class="price">
        <h1>${slide.price}</h1>
        <span>/night</span> 
       </div>
  
      </section>

      <div class="location">
       <img src="Hotels/location.svg">
       <h2>${slide.location}</h2> 
      </div>

      <ul class="features">

       <li>
        <img class="icon" src="${slide.icon1}">
        <span>${slide.text1}</span>
       </li>

       <li>
        <img class="icon" src="${slide.icon2}">
        <span>${slide.text2}</span>
       </li>

       <li>
        <img class="icon" src="${slide.icon3}">
        <span>${slide.text3}</span>
       </li>

      </ul>

      <section class="reviews">     

       <div class="review">
        <img src="Hotels/star.svg">
        <h1>${slide.review}</h1>
        <span>${slide.number}</span>
       </div>

       <button>
        <span>View Details</span>
        <img class="arrow" src="Hotels/arrow.svg">
       </button>

      </section>

     </div>

    </li>

    `;

});

const Cards = document.querySelectorAll(".card");

let currentIndex = 0;
let X = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--x"));

function arrows() {

if (currentIndex <= 0.5) {left.style.display="none";}else{left.style.display="flex";}
if (currentIndex >= Cards.length - 1.5 - X) {right.style.display="none";}else{right.style.display="flex";}

}

function Resize() {
  
if(window.innerHeight < Container.offsetHeight) {

Container.style.position = "absolute";
Container.style.top = "0";

}else{

Container.style.position = "relative";

}

 setTimeout(() => {
    
    X = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--x"));
    cardWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--width"));
    currentIndex = Math.min(currentIndex, Cards.length - X - 1);

    carousel.style.transform = `translateX(calc(${-currentIndex} * (var(--width) + var(--gap))))`;

    arrows();

 },500);
  
}

Resize();
window.addEventListener("resize",Resize);

right.addEventListener("click", () => {

  currentIndex++;

  if(currentIndex >= Cards.length - X) return;

  carousel.style.transform = `translateX(calc(${-currentIndex} * (var(--width) + var(--gap))))`;

  arrows();

});


left.addEventListener("click", () => {

  if (currentIndex <= 0) return;
  
  currentIndex--;

  carousel.style.transform = `translateX(calc(${-currentIndex} * (var(--width) + var(--gap))))`;
 
  arrows();

});
