// src/index.js
import "./styles.css";
import {homeTab} from "./home.js";
import { menuTab } from "./menu.js";
import { aboutTab } from "./about.js";
/* import pizza from "./pizza.jpg";

const image = document.createElement("img");
image.src = pizza;
image.width = 500;

document.body.appendChild(image); 
*/
const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');


const content = document.getElementById('content');
content.append(homeTab);
console.log('hello?');

homeButton.addEventListener('click', () => {
    content.innerHTML = ``;
    content.append(homeTab);
});

menuButton.addEventListener('click', () => {
    content.innerHTML = ``;
    content.append(menuTab);
});

aboutButton.addEventListener('click', () => {
    content.innerHTML = ``;
    content.append(aboutTab);
});