const span = document.querySelector('span')
const para = document.querySelector('.lastmodified');
const today = new Date();
span.textContent = today.getFullYear();
para.textContent = `Last Modification: ${document.lastModified}`