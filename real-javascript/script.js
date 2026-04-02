const button = document.getElementById('submit')
const nameInput = document.getElementById('name')

button.addEventListener('click', scream)

function scream() {
    let message = nameInput.value
    document.getElementById('message').innerHTML = message
    const newChild = document.createElement('p')
    newChild.textContent = "This is a paragraph"
    document.getElementsByTagName('body')[0].append(newChild)
}