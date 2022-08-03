const buttons = document.getElementById("buttons");
const semaforo = document.getElementById("semaforo");

let colorIndex = 0;
let intervalID = null;

const trafficLight = (event) => {
  stopLight();
  turnOn[event.target.id]();
};
const nextIndex = () => (colorIndex = colorIndex < 2 ? ++colorIndex : 0);

const changeLight = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
};

const stopLight = () => clearInterval(intervalID);

const turnOn = {
  red: () => (semaforo.src = "./img/vermelho.png"),
  yellow: () => (semaforo.src = "./img/amarelo.png"),
  green: () => (semaforo.src = "./img/verde.png"),
  auto: () => (intervalID = setInterval(changeLight, 1000)),
};

buttons.addEventListener("click", trafficLight);
