const Container = document.querySelector(".container");
const carousel = document.querySelector(".carousel");
const indicator = document.querySelector(".indicator");

const slides = [

 {image: "Teams/profile1.png", name: "Mark E.", display: "flex", job: "Front-End Developer", badge: "Teams/pen.svg", text: "HTML, CSS, JS"},
 {image: "Teams/profile2.png", name: "Parker K.", display: "none", job: "Full-Stack Developer", badge: "Teams/node.svg", text: "Node.js, React.js"},
 {image: "Teams/profile3.png", name: "Emma U.", display: "flex", job: "UI/UX Designer", badge: "Teams/adobe.svg", text: "Adobe XD, Illustrator"},
 {image: "Teams/profile4.png", name: "John M.", display: "flex", job: "Front-end Developer", badge: "Teams/code.svg", text: "HTML, CSS, JS"},
 {image: "Teams/profile5.png", name: "Samantha L.", display: "none", job: "Back-end Developer", badge: "Teams/server.svg", text: "PHP, MySQL"},
 {image: "Teams/profile6.png", name: "Diana S.", display: "none", job: "Back-end Developer", badge: "Teams/java.svg", text: "JS, Node.js"},
 {image: "Teams/profile7.png", name: "Adrian P.", display: "flex", job: "UI/UX Designer", badge: "Teams/figma.svg", text: "Figma, Illustrator"},
 {image: "Teams/profile8.png", name: "Talia A.", display: "flex", job: "Full-Stack Developer", badge: "Teams/vue.svg", text: "Vue.js, React.js"},
 
];


slides.forEach(slide => {

    carousel.innerHTML += `

    <li class="card ${slide.state}">

     <section class="details">

      <div class="circle">
       <img class="image" src="${slide.image}">
      </div>

      <div class="name">
       <h1>${slide.name}</h1>
       <img src="Teams/verified.svg" style="display:${slide.display};">
      </div>

      <h2>${slide.job}</h2>
        
      <div class="line"></div>

      <div class="badge">
       <img src="${slide.badge}">
       <span>${slide.text}</span>
      </div>

      </section>

    </li>

    `;

});

const Cards = document.querySelectorAll(".card");

let currentIndex = 0;
let slidesPerView = Math.floor(Container.offsetWidth/(160 + 80*(window.innerWidth - 360)/1200));
let slidesInView = 2;
let y;
let numberOfDots;
let oldSlidesPerView;

function updateScroll() {

if (currentIndex == numberOfDots - 1) {

if(y == 0){
  
carousel.style.transform = `translateX(calc(${-currentIndex} * var(--scrollWidth) + 2*var(--x)))`;

}else{

carousel.style.transform = `translateX(calc(${-currentIndex} * var(--scrollWidth) + 2*var(--x) + (var(--slidesInView) - ${y})*var(--scrollWidth)/var(--slidesInView)))`;

}

}else if (currentIndex == 0) {

carousel.style.transform = `translateX(calc(${-currentIndex} * var(--scrollWidth)))`;

}else{

carousel.style.transform = `translateX(calc(${-currentIndex} * var(--scrollWidth) + var(--x))`;

}

}

function Resize() {

if(window.innerHeight < Container.offsetHeight) {

Container.style.position = "absolute";
Container.style.top = "0";

}else{

Container.style.position = "relative";

}


setTimeout(() => {

oldSlidesPerView = slidesPerView;

slidesPerView = Math.floor(Container.offsetWidth/(160 + 80*(window.innerWidth - 360)/1200));

y = (Cards.length - slidesPerView) % slidesInView;

numberOfDots = Math.floor((Cards.length - slidesPerView)/slidesInView + 1);

if(y != 0){numberOfDots++;}

currentIndex = Math.floor((currentIndex * oldSlidesPerView) / slidesPerView);
currentIndex = Math.min(currentIndex,numberOfDots - 1);

updateScroll();

indicator.innerHTML = "";

for (let i = 0; i < numberOfDots; i++) {
  
  const dot = document.createElement("li");

  dot.classList.add("dot");

  if (i === currentIndex) {dot.classList.add("active");}

    dot.addEventListener("click", () => {

      currentIndex = i;

      updateScroll();

      document.querySelectorAll(".dot").forEach(dot => {
        dot.classList.remove("active");
      });

      dot.classList.add("active");

    });

  indicator.appendChild(dot);

}

},500);

}

Resize();
window.addEventListener("resize",Resize);
