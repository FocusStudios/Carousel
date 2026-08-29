const Container = document.querySelector(".Container");
const Background = document.querySelector(".Background");
const carousel = document.querySelector(".carousel");
const Title = document.querySelector(".Title");
const text = document.querySelector(".text");
const Imgs = document.querySelectorAll(".image");
const Badge = document.querySelector(".badge");
const Button = document.querySelector(".button-container");
const root = document.documentElement;

function Resize() {

if(window.innerWidth > window.innerHeight){

Container.classList.replace("height","width");

}else{

Container.classList.replace("width","height");

}

if(window.innerHeight < 0.5*window.innerWidth){

Container.style.height = `${0.5*window.innerWidth}px`;

}else{

Container.style.height = "100vh";

}

}

Resize();
window.addEventListener("resize",Resize);

const sections = [

 {angle: "rotate(-45deg)", image: "Icecreams/img1.png", state: "active"},
 {angle: "rotate(-90deg)", image: "Icecreams/img2.png", state: ""},
 {angle: "rotate(-135deg)", image: "Icecreams/img3.png", state: ""},
 {angle: "rotate(180deg)", image: "Icecreams/img4.png", state: ""},
 {angle: "rotate(135deg)", image: "Icecreams/img5.png", state: ""},
 {angle: "rotate(90deg)", image: "Icecreams/img6.png", state: ""},
 {angle: "rotate(45deg)", image: "Icecreams/img7.png", state: ""},
 {angle: "rotate(0deg)", image: "Icecreams/img8.png", state: ""}

];

sections.forEach(section => {

    carousel.innerHTML += `

    <li style="--i1:${section.angle};">

     <div class="section ${section.state}">
    
     <svg class="shadow" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.3044 1.64962C36.5736 0.584621 38.4699 0.747688 39.4964 2.04828C51.3116 17.0188 58.6 35.0584 60.5003 54.0349C60.6654 55.6835 59.4146 57.1181 57.7618 57.2336L13.8689 60.3029C12.2161 60.4185 10.7918 59.1704 10.5774 57.5275C9.47491 49.0819 6.23239 41.0564 1.15863 34.2153C0.171631 32.8845 0.329193 30.9973 1.59842 29.9323L35.3044 1.64962Z"/>
     </svg>

     <div class="path" style="--i2:url('${section.image}');"></div>

     </div>

    </li>

    `;

});

const buttons = document.querySelectorAll(".wrapper .section");

buttons.forEach((button,index) => {

button.addEventListener("click", () => {

buttons.forEach(btn => {
if (btn !== button && btn.classList.contains("active")) {btn.classList.remove("active");}});
button.classList.toggle("active");

document.querySelector(".Active").classList.remove("Active");
Imgs[index].classList.add("Active");

Title.style.transform="translateY(100vh)";text.style.transform="translateY(100vh)";
Title.style.opacity="0";Title.style.transition="0s";
text.style.opacity="0";text.style.transition="0s";

// Reset animation
Badge.style.animation = "none";
Badge.style.opacity = "0";
Badge.style.display = "flex";
Badge.style.transform = "scale(0.8)";

Button.style.animation = "none";
Button.style.opacity = "0";
Button.style.transform = "scale(0.8)";

// Force browser to apply the reset
void Badge.offsetWidth;
void Button.offsetWidth;

// Start animations
requestAnimationFrame(() => {

Title.style.transition = "0.8s";
text.style.transition = "0.5s 0.5s";

Title.style.transform = "translateY(0)";
text.style.transform = "translateY(0)";

Title.style.opacity = "1";
text.style.opacity = "1";

// Start Button animation again
Badge.style.display = iceCream.display;
Badge.style.animation = "PopUp 0.4s 0.8s forwards";
Button.style.animation = "PopUp 0.4s 1s forwards";

});

const iceCreams = [

  {bg: "#ffbad3", color: "#ff3884", shadow: "rgba(255, 24, 113, 0.4)", Shadow: "rgba(255, 24, 113, 0.3)", title: "Strawberry", text: "Strawberry ice cream mixed with small pieces of fresh strawberries.", display: "flex"},
  {bg: "#baffe9", color: "#00ffae", shadow: "rgba(0, 255, 174, 0.5)", Shadow: "rgba(0, 255, 174, 0.3)", title: "Mint", text: "Mint ice cream topped with fresh mint leaves and chocolate chips.", display: "none"},
  {bg: "#fcffba", color: "#fcd503", shadow: "rgba(252, 213, 3, 0.5)", Shadow: "rgba(252, 213, 3, 0.3)", title: "Mango", text: "Mango ice cream mixed with small cubes of fresh mango.", display: "none"},
  {bg: "#8ceeff", color: "#00baee", shadow: "rgba(0, 198, 225, 0.8)", Shadow: "rgba(0, 198, 225, 0.3)", title: "Blueberry", text: "Blueberry ice cream infused with fresh blueberries and topped with mint leaves.", display: "none"},
  {bg: "#fffef2", color: "#99997d", shadow: "rgba(116, 116, 95, 0.5)", Shadow: "rgba(116, 116, 95, 0.3)", title: "Vanilla", text: "Vanilla ice cream topped with fresh mint leaves.", display: "none"},
  {bg: "#ab816a", color: "#732800", shadow: "rgba(115, 40, 0, 0.5)", Shadow: "rgba(115, 40, 0, 0.3)", title: "Chocolate", text: "Chocolate ice cream garnished with chocolate sauce.", display: "flex"},
  {bg: "#d3ffc2", color: "#50b317", shadow: "rgba(80, 179, 23, 0.5)", Shadow: "rgba(80, 179, 23, 0.3)", title: "Pistachio", text: "Pistachio ice cream garnished with pistachio and fresh mint leaves.", display: "flex"},
  {bg: "#fae7a7", color: "#e19e00", shadow: "rgba(225, 158, 0, 0.5)", Shadow: "rgba(255, 158, 0, 0.3)", title: "Caramel", text: "Creamy caramel ice cream topped with rich caramel sauce and crunchy caramel cubes.", display: "flex"}

];

const iceCream = iceCreams[index];

Background.style.background = iceCream.bg;
document.body.style.background = iceCream.bg;
text.innerHTML = iceCream.text;
Title.querySelectorAll("h1")[0].innerHTML = iceCream.title;
Title.querySelectorAll("h1").forEach(title => title.style.color = iceCream.color);
root.style.setProperty("--fill", iceCream.color);
root.style.setProperty("--shadow", iceCream.shadow);
root.style.setProperty("--Shadow", iceCream.Shadow);

});

});

document.addEventListener("click", (e) => {

if (e.target.closest(".wrapper .section") || e.target.closest("button")) return;

buttons.forEach(btn => btn.classList.remove("active"));

});