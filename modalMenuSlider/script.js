const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modalContainer = document.getElementById('modalContainer');

toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

open.addEventListener('click', () => modalContainer.classList.add('show-modal'))
close.addEventListener('click', () => modalContainer.classList.remove('show-modal'))

window.addEventListener('click', (event) => event.target === modalContainer ? modalContainer.classList.remove('show-modal') : false)