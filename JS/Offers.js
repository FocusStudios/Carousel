const Container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const root = document.documentElement;

const slides = [

 {image: "Offers/offer1.png", h1: "Pizza",  h2: "Burger", h3: "Deluxe", text: "Buy one chicken burger meal, get another free today only.", icon1: "Offers/fries.svg", icon2: "Offers/sauce.svg", icon3: "Offers/soda.svg", text1: "French Fries", text2: "Ranche Sauce", text3: "Iced Cola"},
 {image: "Offers/offer2.png", h1: "Buy One",  h2: "Get One", h3: "For Free!", text: "Buy one chicken burger meal, get another free today only.", icon1: "Offers/fries.svg", icon2: "Offers/sauce.svg", icon3: "Offers/soda.svg", text1: "French Fries", text2: "Cheese Sauce", text3: "Iced Cola"},
 {image: "Offers/offer3.png", h1: "Flash",  h2: "Fried", h3: "Chicken", text: "Enjoy a complete crispy feast at an unbeatable price today!", icon1: "Offers/fries.svg", icon2: "Offers/soda.svg", icon3: "Offers/sauce.svg", text1: "French Fries", text2: "Iced Cola", text3: "Spicy Ketchup"},
 {image: "Offers/offer4.png", h1: "Festive",  h2: "Burger", h3: "Special", text: "Enjoy these delicious mini burgers at an irresistible price today!", icon1: "Offers/sauce.svg", icon2: "Offers/fries.svg", icon3: "Offers/salad.svg", text1: "Honey Mustard", text2: "French Fries", text3: "Fresh Salad"},
 {image: "Offers/offer5.png", h1: "Wrap,",  h2: "Fries", h3: "Deal", text: "Enjoy a delicious chicken wrap with crispy fries and dip", icon1: "Offers/fries.svg", icon2: "Offers/sauce.svg", icon3: "Offers/soda.svg", text1: "French Fries", text2: "Chipotle Mayo", text3: "Iced Cola"},
 {image: "Offers/offer6.png", h1: "Ultimate",  h2: "Feast", h3: "Deal", text: "Burger, hot dog, nuggets, and fries at one great price.", icon1: "Offers/fries.svg", icon2: "Offers/sauce.svg", icon3: "Offers/soda.svg", text1: "French Fries", text2: "Spicy Mustard", text3: "Iced Cola"},
 {image: "Offers/offer7.png", h1: "Weekend",  h2: "Strip", h3: "Feast", text: "Savor premium chicken strips served with two dipping sauces.", icon1: "Offers/fries.svg", icon2: "Offers/sauce.svg", icon3: "Offers/salad.svg", text1: "French Fries", text2: "Ranche Sauce", text3: "Creamy Coleslaw"},
 {image: "Offers/offer8.png", h1: "Family",  h2: "Nugget", h3: "Feast", text: "Extra large nugget portion perfect for sharing with family.", icon1: "Offers/fries.svg", icon2: "Offers/sauce.svg", icon3: "Offers/soda.svg", text1: "French Fries", text2: "Spicy Ketchup", text3: "Iced Cola"}
 
];


slides.forEach(slide => {

    slider.innerHTML += `

    <li class="slide">

     <img class="image" src="${slide.image}">

     <div class="layer"></div>

     <div class="details-container">

      <section class="details">

       <h1>${slide.h1}</h1>
       <h1>${slide.h2}</h1>
       <h1>${slide.h3}</h1>

       <p>${slide.text}</p>

       <div class="button-container">
        <button>
         <span>Order Now</span>
         <img class="icon" src="Offers/arrow.svg">
        </button>
       </div>

     </section>

     </div>

     <img class="curve" src="Offers/curve.svg">

     <ul>

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

    </li>

    `;

});


right.addEventListener("click", () => {

let Slides = document.querySelectorAll(".slide");

slider.append(Slides[0]);

});


left.addEventListener("click", () => {

let Slides = document.querySelectorAll(".slide");

slider.prepend(Slides[Slides.length - 1]);


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

Container.style.position = "absolute";
Container.style.top = "0";

}else{

Container.style.position = "relative";

}

}

Resize();
window.addEventListener("resize",Resize);