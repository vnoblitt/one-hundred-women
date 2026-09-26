// src/index.js
import "./styles.css";
import unlockSoundFile from './woman_unlocked.mp3';

console.log('hello?');
const content = document.getElementById('content');
const inputDiv = document.getElementById('input-div');
const inputBox = document.createElement('input');
const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
const timer = document.getElementById('timer');
const resetButton = document.getElementById('reset');
const counter = document.getElementById('counter');

inputDiv.append(inputBox, submitButton);
let arr = []
arr = makeGrid(content);
let currentIndex = 0;

let timerInterval = null;
let startTime = Date.now();
let elapsedTime = 0;
let womenLeft = 100;
counter.textContent = womenLeft;

timerInterval = setInterval(updateTimer, 100);

const unlockSound = new Audio(unlockSoundFile);

submitButton.addEventListener('click', () => {
    addWoman(inputBox.value);
    inputBox.value = '';
    unlockSound.play();
});

resetButton.addEventListener('click', () => {
    content.innerHTML = '';
    makeGrid(content);
    currentIndex = 0;
    startTime = Date.now();
    elapsedTime = 0;
    womenLeft = 100;
    counter.textContent = womenLeft;
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addWoman(inputBox.value);
        inputBox.value = '';
        unlockSound.play();
    }
});

function updateTimer() {
    const currentElapsed = Date.now() - startTime + elapsedTime;
    timer.textContent = formatTime(currentElapsed);

}

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let totalMinutes = Math.floor(totalSeconds / 60);
    let totalHours = Math.floor(totalMinutes / 60);

    let displaySecs = totalSeconds % 60;
    let displayMins = totalMinutes % 60;
    let displayHours = totalHours;

    let hoursStr = String(displayHours).padStart(2, '0');
    let minsStr = String(displayMins).padStart(2, '0');
    let secsStr = String(displaySecs).padStart(2, '0');

    return `${hoursStr}:${minsStr}:${secsStr}`;
}

function Woman(id, name) {
    this.id = id;
    this.name = name;
}

function makeGrid(content) {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        const woman = new Woman(`woman${i}`, '');
        const womanDiv = document.createElement('div');
        womanDiv.id = `woman${i}`;
        womanDiv.textContent = '';
        womanDiv.classList.add('woman');
        content.append(womanDiv);
        arr.push(woman);
    }
    return arr;
}

function addWoman(name) {
    const targetWoman = arr.find(woman => woman.id === `woman${currentIndex}`);
    targetWoman.name = name;
    const targetDiv = document.getElementById(`woman${currentIndex}`);
    targetDiv.textContent = name;
    currentIndex++;
    womenLeft--;
    counter.textContent = womenLeft;
}