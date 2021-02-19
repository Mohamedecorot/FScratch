const text = document.getElementById('text');
const textArray = text.innerText.split('');

console.log(textArray);

const newElement = document.createElement('h1');

newElement.innerHTML = `
  ${textArray.map(letter =>
    `<span style="${randomVisibility()}">${letter}<span>`).join('')}
`;

newElement.classList.add('letter');

document.body.appendChild(newElement);


function randomVisibility() {
  return Math.random() < 0.5 ? 'visibility:hidden' : 'visibility:visible';
}

