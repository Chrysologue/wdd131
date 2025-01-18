const mainnav = document.querySelector('nav');
const hambutton = document.querySelector('#menu');
const heading = document.querySelector('header');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    heading.classList.toggle('show');
});

const span = document.querySelector('span');
let today = new Date();
span.innerHTML = today.getFullYear();
const lastModified = document.querySelector('#last-modified');
lastModified.innerHTML = `Last modified ${document.lastModified}`;