const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('#modal');
const modalClose = document.querySelector('.modal__close');

cartButton.addEventListener('click', toggleModal);

modalClose.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('active'); 
}

new WOW().init();


