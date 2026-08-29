const wrapper = document.querySelector(".wrapper");

const Carousels = [

  { direction: "right", start: 1,  end: 10 },
  { direction: "left",  start: 11, end: 20 },
  { direction: "right", start: 21, end: 30 },
  { direction: "left",  start: 31, end: 40 },
  { direction: "right", start: 41, end: 50 },

];

Carousels.forEach(Carousel => {

  // Create the carousel
  const carousel = document.createElement("ul");
  carousel.className = `carousel ${Carousel.direction}`;

  // Create 10 cards
  for (let i = Carousel.start; i <= Carousel.end; i++) {

    const card = document.createElement("li");
    card.className = "card";

    card.style.setProperty("--background",`url(Films/film${i}.png)`);

    carousel.appendChild(card);

  }

  // Add carousel to wrapper
  wrapper.appendChild(carousel);

  // Duplicate cards for infinite animation
  carousel.innerHTML += carousel.innerHTML;

  // Pause on touch event
  carousel.addEventListener("touchstart", () => {
    carousel.style.animationPlayState = "paused";
  });

  carousel.addEventListener("touchend", () => {
    carousel.style.animationPlayState = "running";
  });

  // Pause on mouse hover
  carousel.addEventListener("mouseenter", () => {
    carousel.style.animationPlayState = "paused";
  });

  carousel.addEventListener("mouseleave", () => {
    carousel.style.animationPlayState = "running";
  });

});