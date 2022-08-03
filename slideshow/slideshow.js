'use struct';

const images = [
    {'id': '1', 'url': './img/amumu.jpg'},
    {'id': '2', 'url': './img/lulu.jpg'},
    {'id': '3', 'url': './img/braum.jpg'},
    {'id': '4', 'url': './img/zed.jpg'},
]//'json', obg com as img

const containerItems = document.querySelector('#container-items');

const loadImag  = ( images, container) => {
    images.forEach(image => {
        container.innerHTML += `
        <div class="item">
        <img src="${image.url}"
        </div>
        `
    });
}

loadImag( images, containerItems );

let items = document.querySelectorAll( '.item' );

const last = () => {
    containerItems.appendChild(items[0]);// ' appendChild ' sempre envia para o final
    items = document.querySelectorAll( '.item' );
}

const next = () => {
    const lastItem = items[items.length -1];
    containerItems.insertBefore(lastItem, items[0]);// ' insetBefore ' insere dps de..
    items = document.querySelectorAll( '.item' );
}

document.querySelector( '#last' ).addEventListener('click', last );
document.querySelector( '#next' ).addEventListener('click', next );
