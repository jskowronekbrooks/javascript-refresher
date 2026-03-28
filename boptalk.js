let CONSONANTS = 'bcdfghjklmnpqrstvwxyz'

let message = 'I like to row'
let newMessage = ''

for (let i = 0; i < message.length; i++) { 
    if (CONSONANTS.includes(message[i].toLowerCase())) {
        newMessage += message[i] + 'op '
    }
    else if (message[i] !== ' ') {
        newMessage += message[i] + ' '
    }
}

console.log(message)
console.log(newMessage.toLowerCase())