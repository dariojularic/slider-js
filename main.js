import './style.css'
import {data} from "./data.js"

// jel mogu importat u Factory funkciju?

const app = document.querySelector(".app");
const review = document.querySelector(".review");
const slide1 = document.querySelector(".slidez-1");
const slide2 = document.querySelector(".slidez-2");
const slide3 = document.querySelector(".slidez-3");
const slide4 = document.querySelector(".slidez-4");
const slidezs = document.querySelectorAll(".slidez");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const container = document.querySelector(".container");
let currentIndex = 1;

function sliderFactory() {
  let slidersArray = []

  const getSliders = () => slidersArray;
  const setSliders = (sliders) => slidersArray = sliders;

  const moveSliderLeft = () => {
    if (currentIndex >= slidezs.length) currentIndex = 0

    for (let i = 0; i < slidezs.length; i++) {
      slidezs[i].style.transform = `translateX(${(i * 100) - (currentIndex * 100)}%)`
    }
    currentIndex++
  }

  const moveSliderRight = () => {
    if (currentIndex >= slidezs.length) currentIndex = 0

    currentIndex--
    for (let i = 0; i < slidezs.length; i++) {
      slidezs[i].style.transform = `translateX(${(i * 100) + (currentIndex * 100)}%)`
    }
  }


  return {getSliders, setSliders, moveSliderLeft, moveSliderRight}
} 

const slider = sliderFactory();
slider.setSliders(data)


let slideIndex = 0;
slider.getSliders().forEach((slide) => {
  // console.log(slide)
  const html = `<h3>${slide.heading}</h3>
                <p>${slide.paragraph}</p>
                <div class="user">
                  <div class="user-image">
                    <img src="${slide.user.image}"/>
                  </div>
                  <div class="user-info">
                    <p class="user-name">${slide.user.name}</p>
                    <p class="user-location">${slide.user.location}</p>
                  </div>
                </div>`

  // console.log("slidez broj",slidezs[currentIndex])
  slidezs[slideIndex].innerHTML = html
  slideIndex++

})


container.addEventListener("click", (event) => {
  // console.log("event", event)
})



btnLeft.addEventListener("click", () => {
  slider.moveSliderLeft()
})

btnRight.addEventListener("click", () => {
  slider.moveSliderRight()
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
