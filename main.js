import './style.css'
import {data} from "./data.js"

// jel mogu importat u Factory funkciju?

const app = document.querySelector(".app");

function sliderFactory() {
  let slidersArray = []

  const getSliders = () => slidersArray;
  const setSliders = (sliders) => slidersArray = sliders;

  return {getSliders, setSliders}
} 

const slider = sliderFactory();
slider.setSliders(data)


slider.getSliders().forEach((slider) => {
  const html = `<div class="slide">
                  <div class="heading">
                    <h5>Not sure yet</h5>
                    <h2>${slider.heading}</h2>
                  </div>

                  <div class="paragraph">
                    <h4>Best financial decision ever</h4>
                    <p>${slider.paragraph}</p>
                  </div>

                  <div class="user">
                    <div class="user-image">
                      <img src=${slider.user.image}/>
                    </div>
                    <div class="user-info">
                      <p class="user-name">${slider.user.name}</p>
                      <p class="user-location">${slider.user.location}</p>
                    </div>
                  </div>
                </div>`;

  // app.insertAdjacentHTML("afterbegin", html)
  // jel ovo treba bit <ul>???
  app.innerHTML += html
})









