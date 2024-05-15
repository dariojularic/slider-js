import './style.css'
import {data} from "./data.js"

// jel mogu importat u Factory funkciju?

const app = document.querySelector(".app");
const review = document.querySelector(".review");
const slide1 = document.querySelector(".slidez-1");
const slide2 = document.querySelector(".slidez-2");
const slide3 = document.querySelector(".slidez-3");
const slide4 = document.querySelector(".slidez-4");
const container = document.querySelectorAll(".slidez");

function sliderFactory() {
  let slidersArray = []

  const getSliders = () => slidersArray;
  const setSliders = (sliders) => slidersArray = sliders;

  const moveSlider = () => {
    
  }


  return {getSliders, setSliders}
} 

const slider = sliderFactory();
slider.setSliders(data)


let currentIndex = 0;
slider.getSliders().forEach((slide) => {
  // console.log(slide)
  const html = `<h3>${slide.heading}</h3>
                <p>${slide.paragraph}</p>
                <div>
                  <div class="user-image">
                    <img src="${slide.user.image}
                  </div>
                  <div class="user-info">
                    <p class="user-name">${slide.user.name}</p>
                    <p class="user-location">${slide.user.location}</p>
                  </div>
                </div>`

  console.log("slidez broj",container[currentIndex])
  container[currentIndex].innerHTML = html
  currentIndex++

})

// slider.getSliders().forEach((slider) => {
//   const html = `<div class="slide">
//                   <div class="paragraph">
//                     <h4>Best financial decision ever</h4>
//                     <p>${slider.paragraph}</p>
//                   </div>

//                   <div class="user">
//                     <div class="user-image">
//                       <img class="user-avatar" src="${slider.user.image}"/>
//                     </div>
//                     <div class="user-info">
//                       <p class="user-name">${slider.user.name}</p>
//                       <p class="user-location">${slider.user.location}</p>
//                     </div>
//                   </div>
//                 </div>`;

//   // app.insertAdjacentHTML("afterbegin", html)
//   // jel ovo treba bit <ul>???
//   review.innerHTML += html
// })





// arraydata = slides je array objekata
// currentIndex, loop 
