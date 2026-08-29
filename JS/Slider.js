const Wrapper = document.querySelector(".Wrapper");
const Container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const root = document.documentElement;

const slides = [

 {gradient: "linear-gradient(#D6D6D6,#606060)", color: "#606060", brand: "adidas", image: "Shoes/shoes1.png", Title: "Running Shoes", Color: "Black", price1: "£49", price2: "£84", off: "Shoes/50off.svg", display: "flex", logo: "Shoes/adidas.svg", activeSize: 9},
 {gradient: "linear-gradient(#A7A7A7,#666666)", color: "#666666", brand: "adidas", image: "Shoes/shoes2.png", Title: "Running Shoes", Color: "Grey", price1: "£71", price2: "£89", off: "Shoes/50off.svg", display: "none", logo: "Shoes/adidas.svg", activeSize: 7},
 {gradient: "linear-gradient(#DEDEDE,#898989)", color: "#898989", brand: "adidas", image: "Shoes/shoes3.png", Title: "Running Shoes", Color: "White", price1: "£61", price2: "£84", off: "Shoes/25off.svg", display: "flex", logo: "Shoes/adidas.svg", activeSize: 6},
 {gradient: "linear-gradient(#4799FF,#004DAD)", color: "#004DAD", brand: "nike", image: "Shoes/shoes4.png", Title: "Air Jordan 1", Color: "Royal Blue", price1: "£112", price2: "£149", off: "Shoes/25off.svg", display: "flex", logo: "Shoes/nike.svg", activeSize: 8},
 {gradient: "linear-gradient(#FFEB52,#AD9A00)", color: "#AD9A00", brand: "nike", image: "Shoes/shoes5.png", Title: "Air Jordan 1", Color: "Yellow", price1: "£129", price2: "£149", off: "Shoes/50off.svg", display: "none", logo: "Shoes/nike.svg", activeSize: 9},
 {gradient: "linear-gradient(#FF5274,#A30021)", color: "#A30021", brand: "nike", image: "Shoes/shoes6.png", Title: "Air Jordan 1", Color: "Red", price1: "£129", price2: "£149", off: "Shoes/50off.svg", display: "none", logo: "Shoes/nike.svg", activeSize: 6},
 {gradient: "linear-gradient(#C9C9C9,#555555)", color: "#555555", brand: "puma", image: "Shoes/shoes7.png", Title: "Speedcat Sneakers", Color: "Black", price1: "£59", price2: "£109", off: "Shoes/50off.svg", display: "flex", logo: "Shoes/puma.svg", activeSize: 8},
 {gradient: "linear-gradient(#D6D6D6,#606060)", color: "#606060", brand: "puma", image: "Shoes/shoes8.png", Title: "Speedcat Sneakers", Color: "White", price1: "£71", price2: "£94", off: "Shoes/25off.svg", display: "flex", logo: "Shoes/puma.svg", activeSize: 7},
 {gradient: "linear-gradient(#F9BACD,#D9387A)", color: "#D9387A", brand: "puma", image: "Shoes/shoes9.png", Title: "Speedcat Sneakers", Color: "Pink", price1: "£91", price2: "£109", off: "Shoes/25off.svg", display: "none", logo: "Shoes/puma.svg", activeSize: 9}
 
];


slides.forEach(slide => {

    slider.innerHTML += `

    <li class="slide" style="--gradient:${slide.gradient};--color:${slide.color};">

    <section class="image ${slide.brand}">
     <div class="shadow"></div>
     <img src="${slide.image}">
    </section>

    <div class="info">

     <section class="details">

     <div class="description">
      <h3>${slide.Title}</h3>
      <span>${slide.Color}</span>
     </div>

     <div class="price">
      <h1>${slide.price1}</h1>
      <h2>${slide.price2}</h2>
     </div>

     </section>

    <div class="line"></div>

    <section class="size">

     <div class="size-container">
     <span>Select Size</span>
     <ul>
      <li data-size="6">6</li>
      <li data-size="7">7</li>
      <li data-size="8">8</li>
      <li data-size="9">9</li>
     </ul>
     </div>

     <div class="button-container">
      <button>
       <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1.65625C0 1.29258 0.299768 1 0.672368 1H1.94706C2.56341 1 3.10971 1.35 3.36464 1.875H14.879C15.6158 1.875 16.1537 2.55859 15.9603 3.25312L14.8117 7.41753C14.5736 8.27612 13.7751 8.87501 12.8646 8.87501H4.78224L4.93352 9.65427C4.99512 9.96324 5.27248 10.1875 5.59464 10.1875H13.6715C14.0441 10.1875 14.3438 10.4801 14.3438 10.8437C14.3438 11.2074 14.0441 11.5 13.6715 11.5H5.59464C4.62536 11.5 3.79328 10.8273 3.61399 9.90039L2.16839 2.49023C2.14878 2.38632 2.05633 2.3125 1.94706 2.3125H0.672368C0.299768 2.3125 0 2.01992 0 1.65625ZM3.58597 13.6874C3.58597 13.5151 3.62075 13.3444 3.68833 13.1852C3.75591 13.0259 3.85496 12.8812 3.97983 12.7594C4.10472 12.6376 4.25296 12.5408 4.41608 12.4749C4.57928 12.4089 4.75408 12.375 4.93072 12.375C5.10728 12.375 5.28216 12.4089 5.44528 12.4749C5.60848 12.5408 5.75672 12.6376 5.8816 12.7594C6.00648 12.8812 6.10552 13.0259 6.17304 13.1852C6.24064 13.3444 6.27544 13.5151 6.27544 13.6874C6.27544 13.8598 6.24064 14.0305 6.17304 14.1897C6.10552 14.349 6.00648 14.4936 5.8816 14.6155C5.75672 14.7374 5.60848 14.8341 5.44528 14.9001C5.28216 14.966 5.10728 15 4.93072 15C4.75408 15 4.57928 14.966 4.41608 14.9001C4.25296 14.8341 4.10472 14.7374 3.97983 14.6155C3.85496 14.4936 3.75591 14.349 3.68833 14.1897C3.62075 14.0305 3.58597 13.8598 3.58597 13.6874ZM12.9991 12.375C13.3558 12.375 13.6978 12.5132 13.95 12.7594C14.2022 13.0056 14.3438 13.3394 14.3438 13.6874C14.3438 14.0355 14.2022 14.3694 13.95 14.6155C13.6978 14.8617 13.3558 15 12.9991 15C12.6425 15 12.3004 14.8617 12.0482 14.6155C11.7961 14.3694 11.6544 14.0355 11.6544 13.6874C11.6544 13.3394 11.7961 13.0056 12.0482 12.7594C12.3004 12.5132 12.6425 12.375 12.9991 12.375ZM7.05984 5.37499C7.05984 5.67576 7.312 5.92187 7.62016 5.92187H8.85288V7.12496C8.85288 7.42573 9.10496 7.67185 9.41312 7.67185C9.72136 7.67185 9.97344 7.42573 9.97344 7.12496V5.92187H11.2062C11.5143 5.92187 11.7665 5.67576 11.7665 5.37499C11.7665 5.07422 11.5143 4.8281 11.2062 4.8281H9.97344V3.62499C9.97344 3.32421 9.72136 3.07812 9.41312 3.07812C9.10496 3.07812 8.85288 3.32421 8.85288 3.62499V4.8281H7.62016C7.312 4.8281 7.05984 5.07422 7.05984 5.37499Z" fill="var(--color)"/>
       </svg>
      </button>
     </div>

    </section>

    </div>

    <img class="off" src="${slide.off}" style="display:${slide.display};">
    <img class="logo" src="${slide.logo}">

</li>

    `;

});


const Slides = document.querySelectorAll(".slide");

Slides.forEach((Slide,index) => {

Slide.querySelectorAll(".size ul li").forEach(button => {

const activeSize = slides[index].activeSize;

  if (Number(button.dataset.size) === activeSize) {
            button.classList.add("active");
        }

button.addEventListener("click",() => {

Slide.querySelector(".size ul li.active").classList.remove("active");
button.classList.add("active");

});

});

});

function size() {

let Slides = document.querySelectorAll(".slide");

Slides.forEach(Slide => {

Slide.querySelectorAll(".size ul li").forEach(button => {

button.addEventListener("click",() => {

Slide.querySelector(".size ul li.active").classList.remove("active");
button.classList.add("active");

});

});

});

}

size();


left.addEventListener("click", () => {

let Slides = document.querySelectorAll(".slide");

slider.append(Slides[0]);

size();

});


right.addEventListener("click", () => {

let Slides = document.querySelectorAll(".slide");

slider.prepend(Slides[Slides.length - 1]);

size();

});

function Resize() {

if(window.innerWidth > window.innerHeight){

root.style.setProperty("--ia", "100vw");
root.style.setProperty("--ib", "360px");
root.style.setProperty("--ic", "1200px");

}else{

root.style.setProperty("--ia", "100vw");
root.style.setProperty("--ib", "360px");
root.style.setProperty("--ic", "1200px");

}

if(window.innerHeight < Container.offsetHeight){

Wrapper.classList.remove("state1");
Wrapper.classList.add("state2");

}else{

Wrapper.classList.remove("state2");
Wrapper.classList.add("state1");

}

}

Resize();
window.addEventListener("resize",Resize);