const wrapper = document.querySelector(".wrapper");

const Carousels = [

  { direction: "up", start: 1,  end: 6 },
  { direction: "down",  start: 7, end: 12 },
  { direction: "up", start: 13, end:  18},
  { direction: "down",  start: 19, end: 24 },
  { direction: "up", start: 25, end: 30 },
  { direction: "down", start: 31, end: 36 },
  { direction: "up",  start: 37, end: 42 },
  { direction: "down", start: 43, end: 48 },

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
