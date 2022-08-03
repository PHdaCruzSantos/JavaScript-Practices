'use strict';

const section = document.querySelector('section');
const btnModal = document.querySelector('#modal-btn');
const btnHome = document.querySelector('.btn');
const setDate = document.querySelector('#setDate').value;
// const setTime = document.querySelector('#setTime').value;

const formatDigit = (digit) => `0${digit}`.slice(-2); 

const attTime = (time) => {
    const seconds = document.getElementById( 'segundos');
    const min = document.getElementById( 'minutos');
    const hours = document.getElementById( 'horas');
    const days = document.getElementById( 'dias');

    const qtdSeconds = time % 60;//tira os segundo do time
    const qtdMin = Math.floor((time % (60 * 60)) / 60);//tira os minutos do time
    const qtdHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));//tira as horas do time
    const qtdDays = Math.floor(time / (60 * 60 * 24 ));//tira as horas do time


    seconds.textContent = formatDigit(qtdSeconds);
    min.textContent = formatDigit(qtdMin);
    hours.textContent = formatDigit(qtdHours);
    days.textContent = formatDigit(qtdDays);

}

const countDown = (time) => {

    const count = () => {
        attTime(time)
        time == 0 ? stopCount(idBySetInterval) : time--;
        // if (time == 0 ) stopCount();
        // time--;
    }
    const stopCount = () => clearInterval(idBySetInterval);
    const idBySetInterval = setInterval(count, 1000);
}

const timeLeft = () => {
    // 1 de jan de 1970 reference date in js
    const eventDate = new Date(setDate);//incremente datade whith input value
    const todayDate = Date.now();
    return Math.floor((eventDate - todayDate) / 1000);//ms

}


const openModal = () => {
    section.classList.add('active');
}

const closeModal = (e) =>{
    if (e.target.id == 'section' ) {
        console.log(e);
        section.classList.remove('active');
    }
    
} 
section.addEventListener('click', closeModal);
btnHome.addEventListener('click', openModal);
btnModal.addEventListener('click', countDown(timeLeft()))