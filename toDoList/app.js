'user strict';
//create new label

// let getBd() = [
//     {'task': 'Estudar Js', 'status': ''},
//     {'task': 'netFlix', 'status': 'checked'}
// ];


const setBd = (bd) => localStorage.setItem('todoList', JSON.stringify(bd));
const getBd = () => JSON.parse(localStorage.getItem('todoList')) ?? [];// ?? funciona como um try catch

const render = () => {
    clearTask();
    const bd = getBd();
    bd.forEach ((item, i) => createTask(item.task, item.status, i));
}

const clearTask = () => { 
    const todoList = document.getElementById('todoList');
    while(todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }    
}

const createTask = (task, status, i) => {
    const item = document.createElement('label');
    item.classList.add('todo-item');//add item int the const item
    item.innerHTML = ` 
        <input type="checkbox" ${status} data-i=${i}>
        <div>${task}</div>
        <input type="button" value="X" data-i=${i}>
    `
    document.getElementById('todoList').appendChild(item);
}

render();


const insertTask = (e) => {
    const kBk = e.key;
    const text = e.target.value;
    if(kBk === 'Enter'){
        const bd = getBd();
        bd.push({'task': text, 'status': ''});
        setBd(bd);
        render();
        e.target.value = '';
    }

}

const deleteTask = (indice) => {
    const bd = getBd();
    bd.splice(indice, 1);
    setBd(bd);
    render();
}

const attStatus = (indice) => {
    const bd = getBd();
    bd[indice].status = getBd()[indice].status === '' ? 'checked' : '';
    setBd(bd);
}

const clickItem = (e) => {
    const clickElement = e.target;
    if(clickElement.type === "button") {
        const indice = clickElement.dataset.i;
        deleteTask(indice);
    } else if(clickElement.type === "checkbox"){
        const indice = clickElement.dataset.i;
        attStatus(indice);
    }
}

document.getElementById('newItem').addEventListener('keypress', insertTask);
document.getElementById('todoList').addEventListener('click', clickItem);