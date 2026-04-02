const nameInput = document.getElementById('name')
const animalInput = document.getElementById('animal')
const button = document.getElementById('submit')
const firstHeader = document.getElementById('message')

button.addEventListener('click', updateHeader)
button.addEventListener('mouseover', changeColor)

function updateHeader() {
    firstHeader.textContent = `Hello ${nameInput.value}. Don't you wish you were a ${animalInput.value}?`
}

function changeColor() {
    nameInput.style.backgroundColor = 'red'
    animalInput.style.backgroundColor = getRandomColor()
}

//From Anatoliy on StackOverflow
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}