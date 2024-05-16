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
let currentSlide = 1;

function sliderFactory() {
  let slidersArray = []

  const getSliders = () => slidersArray;
  const setSliders = (sliders) => slidersArray = sliders;

  const moveSliderLeft = () => {
    if (currentSlide >= slidezs.length) currentSlide = 0

    for (let i = 0; i < slidezs.length; i++) {
      slidezs[i].style.transform = `translateX(${(i * 100) - (currentSlide * 100)}%)`
    }
    currentSlide++
    console.log("currentSlide is", currentSlide)
  }
  


  
  const moveSliderRight = () => {
    if (currentSlide === 1) currentSlide = 4
    
    for (let i = 0; i < slidezs.length; i++) {
      slidezs[i].style.transform = `translateX(${(i * 100) - (currentSlide * 100)}%)`
    }
    currentSlide--
    console.log("currentSlide is", currentSlide)
  }


  return {getSliders, setSliders, moveSliderLeft, moveSliderRight}
} 

const slider = sliderFactory();
slider.setSliders(data)


let slideIndex = 0;
slider.getSliders().forEach((slide) => {
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

  slidezs[slideIndex].innerHTML = html
  slideIndex++

})

btnLeft.addEventListener("click", () => {
  slider.moveSliderLeft()
})

btnRight.addEventListener("click", () => {
  slider.moveSliderRight()
})

// arraydata = slides je array objekata
// currentIndex, loop 
