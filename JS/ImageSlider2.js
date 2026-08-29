const Wrapper = document.querySelector(".Wrapper");
const Container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
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

const hexagons = ["A", "B", "C", "D", "E", "F"];

hexagons.forEach(hexagon => {

    Wrapper.innerHTML += `

     <svg class="${hexagon}" viewBox="0 0 300 300">

     <path class="hexagon stroke" filter="url(#Stroke-Shadow)" d="M 134.4115427318801 39 Q 150 30 165.5884572681199 39 L 238.33459118601274 81 Q 253.92304845413264 90 253.92304845413264 108 L 253.92304845413264 192 Q 253.92304845413264 210 238.33459118601274 219 L 165.5884572681199 261 Q 150 270 134.4115427318801 261 L 61.665408813987256 219 Q 46.07695154586736 210 46.07695154586736 192 L 46.076951545867374 107.99999999999999 Q 46.076951545867374 89.99999999999999 61.66540881398727 80.99999999999999 Z"></path>
     <path class="hexagon glow" stroke="url(#Grad-Stroke)" filter="url(#Stroke-Shadow)" d="M 134.4115427318801 39 Q 150 30 165.5884572681199 39 L 238.33459118601274 81 Q 253.92304845413264 90 253.92304845413264 108 L 253.92304845413264 192 Q 253.92304845413264 210 238.33459118601274 219 L 165.5884572681199 261 Q 150 270 134.4115427318801 261 L 61.665408813987256 219 Q 46.07695154586736 210 46.07695154586736 192 L 46.076951545867374 107.99999999999999 Q 46.076951545867374 89.99999999999999 61.66540881398727 80.99999999999999 Z"></path>

    </svg>

    `;

});


const themes = [

 {color1:"#fb00ff", color2:"#b404ff", Background:"#19003D", Shadow:"rgba(251,0,255,0.6)"},
 {color1:"#7226FF", color2:"#4326FF", Background:"#1C0A4A", Shadow:"rgba(139,76,255,0.6)"},
 {color1:"#977DFF", color2:"#0033FF", Background:"#00114D", Shadow:"rgba(66,104,255,0.6)"},
 {color1:"#00B9FF", color2:"#00FF92", Background:"#002233", Shadow:"rgba(0,185,255,0.6)"},
 {color1:"#B2FF00", color2:"#00C732", Background:"#112400", Shadow:"rgba(102,234,10,0.6)"},
 {color1:"#FFC900", color2:"#FF7C00", Background:"#332100", Shadow:"rgba(255,150,0,0.6)"}

];

function changeTheme(index) {

root.style.setProperty("--color1", themes[index].color1);
root.style.setProperty("--color2", themes[index].color2);
root.style.setProperty("--Background", themes[index].Background);
root.style.setProperty("--Shadow", themes[index].Shadow);

}

function updateTheme() {

const active = document.querySelectorAll(".page")[1];
changeTheme(+active.dataset.theme);

}


const pages = [

 {image: "Courses/course1.png", gradient: "linear-gradient(to bottom right, #D400FF, #610075)", background : "rgba(119,0,143,0.8)", shadow: "#D400FF", title: "Graphic Design", subtitle: "Design Stunning Visuals.", icon1: "Courses/Icon1.svg", path1: "Brand Design", icon2: "Courses/Icon2.svg", path2: "Logo Design", icon3: "Courses/Icon3.svg", path3: "UI/UX Design", client1: "Courses/client2.png", client2: "Courses/client15.png", client3: "Courses/client11.png", clients: "+2.5K"},
 {image: "Courses/course2.png", gradient: "linear-gradient(to bottom right, #7226FF, #160078)", background : "rgba(50,0,143,0.8)", shadow: "#7226FF", title: "Digital Marketing", subtitle: "Grow Digital Businesses", icon1: "Courses/Icon4.svg", path1: "Growth Ads", icon2: "Courses/Icon5.svg", path2: "Email Marketing", icon3: "Courses/Icon6.svg", path3: "SEO Ads", client1: "Courses/client13.png", client2: "Courses/client3.png", client3: "Courses/client7.png", clients: "+5.4K"},
 {image: "Courses/course3.png", gradient: "linear-gradient(to bottom right, #977DFF, #0033FF)", background : "rgba(0,27,133,0.8)", shadow: "#0033FF", title: "Artificial Intelligence", subtitle: "Create Intelligent Solutions.", icon1: "Courses/Icon7.svg", path1: "AI Tools", icon2: "Courses/Icon8.svg", path2: "Data Analysis", icon3: "Courses/Icon9.svg", path3: "Prompt Design", client1: "Courses/client6.png", client2: "Courses/client1.png", client3: "Courses/client4.png", clients: "+10K"},
 {image: "Courses/course4.png", gradient: "linear-gradient(to bottom right, #00B9FF, #00FF92)", background : "rgba(0,104,143,0.8)", shadow: "#00B9FF", title: "Code Master", subtitle: "Build Modern Applications.", icon1: "Courses/Icon10.svg", path1: "Web Dev", icon2: "Courses/Icon11.svg", path2: "App Dev", icon3: "Courses/Icon12.svg", path3: "Game Dev", client1: "Courses/client16.png", client2: "Courses/client17.png", client3: "Courses/client12.png", clients: "+7.9K"},
 {image: "Courses/course5.png", gradient: "linear-gradient(to bottom right, #B2FF00, #00C732)", background : "rgba(30,102,0,0.8)", shadow: "#00C732", title: "Online Trading", subtitle: "Master Financial Markets.", icon1: "Courses/Icon13.svg", path1: "Forex Trading", icon2: "Courses/Icon14.svg", path2: "Crypto Trading", icon3: "Courses/Icon15.svg", path3: "Risk Control", client1: "Courses/client5.png", client2: "Courses/client18.png", client3: "Courses/client8.png", clients: "+4.8K"},
 {image: "Courses/course6.png", gradient: "linear-gradient(to bottom right, #FFC900, #FF7C00)", background : "rgba(128,62,0,0.8)", shadow: "#FF7C00", title: "Content Creation", subtitle: "Produce Engaging Content.", icon1: "Courses/Icon16.svg", path1: "Video Making", icon2: "Courses/Icon17.svg", path2: "Copy Writing", icon3: "Courses/Icon18.svg", path3: "Podcast Making", client1: "Courses/client14.png", client2: "Courses/client9.png", client3: "Courses/client10.png", clients: "+6.2K"},

];

const wrapper = document.querySelector(".wrapper");

pages.forEach((page,index) => {

    wrapper.innerHTML += `

    <li class="page" data-theme="${index}" style="--img:url(${page.image});--gradient:${page.gradient};--background:${page.background};--shadow:${page.shadow};">

     <section class="details">

      <h1>${page.title}</h1>

      <p>${page.subtitle}</p>

      <ul class="paths">

       <li>
        <div class="icon">
         <img src="${page.icon1}">
        </div>
        <span>${page.path1}</span>
       </li>

       <li>
        <div class="icon">
         <img src="${page.icon2}">
        </div>
        <span>${page.path2}</span>
       </li>

       <li>
        <div class="icon">
         <img src="${page.icon3}">
        </div>
        <span>${page.path3}</span>
       </li>

      </ul>

      <div class="join">

       <div class="button-container">
        <button>Join Now</button>
       </div>

       <section>

        <div class="profile-container">

         <img src="${page.client1}">
         <img src="${page.client2}">
         <img src="${page.client3}">

        </div>

        <div class="text-container">
         <h2>${page.clients}</h2>
         <span>Clients</span>
        </div>

       </section>

      </div>

     </section>

    </li>

    `;

});


const slides = ["Courses/course1.png", "Courses/course2.png", "Courses/course3.png", "Courses/course4.png", "Courses/course5.png", "Courses/course6.png"];

slides.forEach(slide => {

    slider.innerHTML += `

    <li class="slide" style="--img:url(${slide});"></li>

    `;

});

slider.addEventListener("click", (e) => {

const slide = e.target.closest(".slide");

if (!slide) return;

let Slides = slider.querySelectorAll(".slide");
let Pages = wrapper.querySelectorAll(".page");

if (slide === Slides[2]) {
slider.appendChild(Slides[0]);
wrapper.appendChild(Pages[0]);
}

updateTheme();

});

right.addEventListener("click",() => {

let Slides = document.querySelectorAll(".slide");
slider.appendChild(Slides[0]);

let Pages = document.querySelectorAll(".page");
wrapper.appendChild(Pages[0]);

updateTheme();

});

left.addEventListener("click",() => {

let Slides = document.querySelectorAll(".slide");
slider.prepend(Slides[Slides.length - 1]);

let Pages = document.querySelectorAll(".page");
wrapper.prepend(Pages[Slides.length - 1]);

updateTheme();

});