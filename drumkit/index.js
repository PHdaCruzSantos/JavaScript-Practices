'use stict';

const sounds = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tom.wav',
}


const createDiv = (text) => {
    const div = document.createElement( 'div' );
    div.classList.add('key');//add class in create div's
    div.textContent = text;
    div.id = text;
    document.getElementById( 'container' ).appendChild(div);//ode sera inserida as div criada
} 

const showSounds = (sounds) => Object.keys(sounds).forEach(createDiv);//usando o Obj.kays pego apenas as chaves dos valores no json, e o foreach manda elas para a fincao desejada.

const playSounds = (kaps) => {
    const audio = new Audio( `./sounds/${sounds[kaps]}` );
    audio.play();
}

const addEfect = (letter) => document.getElementById(letter).classList.add('active');

const removedEfect = (letter) => {
    const div = document.getElementById(letter);
    div.addEventListener('transitionend', () => document.getElementById(letter).classList.remove('active') );// so removera a classe com os eveitos assim que acabar a transissao.
}

const activeSounds = (e) => {    
    const letter = e.type == 'click' ? e.target.id : e.key.toUpperCase();//tenario

    const permitLetter = sounds.hasOwnProperty(letter);
    if (permitLetter){
        addEfect(letter);
        playSounds(letter);
        removedEfect(letter);
    }
}
showSounds(sounds);

document.getElementById( 'container' ).addEventListener('click', activeSounds);

window.addEventListener('keydown', activeSounds);