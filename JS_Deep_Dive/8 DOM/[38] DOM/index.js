// JS -> HTML, CSS (DOM - Document Object Model)
// console.log(document.body)
const p = document.createElement('p');
p.innerText = 'Hello world';
document.body.append(p);

document.body.style.background = 'palegoldenrod'
p.style.color = '#0af'

p.addEventListener('click', () => console.log('clicked'));