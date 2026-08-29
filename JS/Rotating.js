const Container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const root = document.documentElement;

const slides = [

 {image: "Devices/device1.png", badge: "Devices/icon1.svg", text: "Premium", title: "Apple", subtitle: "Black Smart Watch", icon1: "Devices/heart.svg", description1: "Health Tracking", icon2: "Devices/wireless.svg", description2: "Wireless Design", icon3: "Devices/screen.svg", description3: "Touch Screen", price: "$229"},
 {image: "Devices/device2.png", badge: "Devices/icon2.svg", text: "Premium", title: "Apple", subtitle: "Black Smart Watch", icon1: "Devices/heart.svg", description1: "Health Tracking", icon2: "Devices/wireless.svg", description2: "Wireless Design", icon3: "Devices/screen.svg", description3: "Touch Screen", price: "$269"},
 {image: "Devices/device3.png", badge: "Devices/icon3.svg", text: "Best Seller", title: "JBL", subtitle: "Dark Navy Headphones", icon1: "Devices/wireless.svg", description1: "Wireless Audio", icon2: "Devices/audio.svg", description2: "Noise Cancellation", icon3: "Devices/battery.svg", description3: "Long Battery", price: "$159"},
 {image: "Devices/device4.png", badge: "Devices/icon4.svg", text: "New Arrival", title: "Apple", subtitle: "Black AirPods", icon1: "Devices/wireless.svg", description1: "Wireless Design", icon2: "Devices/water.svg", description2: "Water Resistant", icon3: "Devices/charge.svg", description3: "Charging Case", price: "$189"},
 {image: "Devices/device5.png", badge: "Devices/icon5.svg", text: "Premium", title: "SONY", subtitle: "Black Headphones", icon1: "Devices/wireless.svg", description1: "Wireless Audio", icon2: "Devices/audio.svg", description2: "Noise Cancellation", icon3: "Devices/battery.svg", description3: "Long Battery", price: "$229"},
 {image: "Devices/device6.png", badge: "Devices/icon6.svg", text: "Best Seller", title: "Lenovo", subtitle: "White AirPods", icon1: "Devices/wireless.svg", description1: "Wireless Design", icon2: "Devices/water.svg", description2: "Water Resistant", icon3: "Devices/charge.svg", description3: "Charging Case", price: "$169"},
 {image: "Devices/device7.png", badge: "Devices/icon7.svg", text: "Best Seller", title: "FLOVEME", subtitle: "Black Power Bank", icon1: "Devices/charge.svg", description1: "Fast Charging", icon2: "Devices/battery.svg", description2: "High Capacity", icon3: "Devices/screen.svg", description3: "Digital Display", price: "$89"},
 {image: "Devices/device8.png", badge: "Devices/icon8.svg", text: "Best Seller", title: "Beats", subtitle: "Black Headphones", icon1: "Devices/wireless.svg", description1: "Wireless Audio", icon2: "Devices/audio.svg", description2: "Noise Cancellation", icon3: "Devices/battery.svg", description3: "Long Battery", price: "$149"},
 {image: "Devices/device9.png", badge: "Devices/icon1.svg", text: "Premium", title: "MOMAX", subtitle: "Black Power Bank", icon1: "Devices/charge.svg", description1: "Fast Charging", icon2: "Devices/battery.svg", description2: "High Capacity", icon3: "Devices/screen.svg", description3: "Digital Display", price: "$89"},
 {image: "Devices/device10.png", badge: "Devices/icon2.svg", text: "Premium", title: "Anker", subtitle: "White Power Bank", icon1: "Devices/charge.svg", description1: "Fast Charging", icon2: "Devices/battery.svg", description2: "High Capacity", icon3: "Devices/screen.svg", description3: "Digital Display", price: "$129"},
 {image: "Devices/device11.png", badge: "Devices/icon3.svg", text: "Best Seller", title: "Apple", subtitle: "White AirPods", icon1: "Devices/wireless.svg", description1: "Wireless Design", icon2: "Devices/water.svg", description2: "Water Resistant", icon3: "Devices/charge.svg", description3: "Charging Case", price: "$149"},
 {image: "Devices/device12.png", badge: "Devices/icon4.svg", text: "New Arrival", title: "Apple", subtitle: "ًWhite Smart Watch", icon1: "Devices/heart.svg", description1: "Health Tracking", icon2: "Devices/wireless.svg", description2: "Wireless Design", icon3: "Devices/screen.svg", description3: "Touch Screen", price: "$249"}

];


slides.forEach((slide,index) => {


    slider.innerHTML += `

    <li class="slide" style="--i:${index + 1};">

        <div class="card">

        <img class="image" src="${slide.image}" loading="lazy" alt="">

        <section class="badge">
            <img class="icon" src="${slide.badge}">
            <span>${slide.text}</span>
        </section>

        <svg class="like" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M28.3383 20.6495L20.0093 29L11.6802 20.6495C11.1309 20.1083 10.6981 19.4578 10.4093 18.739C10.1204 18.0202 9.98174 17.2487 10.0019 16.473C10.0221 15.6973 10.2007 14.9342 10.5266 14.2318C10.8524 13.5294 11.3184 12.9029 11.8951 12.3917C12.4719 11.8806 13.1469 11.4959 13.8778 11.2618C14.6086 11.0277 15.3794 10.9494 16.1417 11.0317C16.9039 11.114 17.641 11.3552 18.3067 11.7401C18.9723 12.1249 19.552 12.6452 20.0093 13.268C20.4685 12.6497 21.0489 12.134 21.714 11.7532C22.3792 11.3724 23.1149 11.1347 23.875 11.055C24.635 10.9753 25.4032 11.0552 26.1314 11.2898C26.8596 11.5244 27.5321 11.9087 28.1068 12.4185C28.6815 12.9283 29.1461 13.5527 29.4715 14.2526C29.7969 14.9526 29.976 15.713 29.9978 16.4862C30.0195 17.2595 29.8833 18.0289 29.5978 18.7465C29.3122 19.464 28.8834 20.1141 28.3383 20.6562" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <footer>

            <section class="details">
                <h1>${slide.title}</h1>
                <h2>${slide.subtitle}</h2>
            </section>


            <section class="features">

                <div class="line"></div>

                <ul>

                    <li>
                        <img class="icon" src="${slide.icon1}">
                        <span>${slide.description1}</span>
                    </li>

                    <li>

                        <div class="vline"></div>
                        <div class="vline"></div>
                
                        <img class="icon" src="${slide.icon2}">
                        <span>${slide.description2}</span>

                    </li>

                    <li>
                        <img class="icon" src="${slide.icon3}">
                        <span>${slide.description3}</span>
                    </li>

                </ul>

                <div class="line"></div>

            </section>


            <section class="price">
            
                <h3>${slide.price}</h3>
                
                <button>
                    <span>Shop Now</span>
                    <img class="icon" src="Devices/bag.svg">
                </button>

            </section>

        </footer>

        </div>

    </li>

    `;

});

const Likes = document.querySelectorAll(".slide .like");

Likes.forEach(Like => {

Like.addEventListener("click",() => {

if(Like.classList.contains("active")){Like.classList.remove("active");}else{Like.classList.add("active");}

});

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