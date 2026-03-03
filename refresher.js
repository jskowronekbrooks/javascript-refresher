//console.log('Hello world!');

let message = 'How are you today?';
//console.log(message)

let greeting = 'Hello';
let name = 'Sue';
//console.log(greeting + ' ' + name + "!");

let age = 13;
//console.log('You are ' + age)

//console.log("In ten years you will be " + (10 + age))*/

//Part 2

/*if (name == 'Bob') {
    console.log('I knew it was you, ' + name + '!')
} else {
    console.log('Hey Sue, you\'re not Bob!')
}

let iAmWearingABelt = false;
let iAmWearingGlasses = true;

if (iAmWearingABelt && !iAmWearingGlasses) {
    console.log('Probably not Mr. Gorton')
} else if (iAmWearingABelt && iAmWearingGlasses){
    console.log('Probably is Mr. Gorton')
} else {
    console.log('Probably just some dude')
}*/

/*for (let i = 0; i < 6; i++) {
    console.log((i + 1) + '. comp sci is awesome')
}

for (let i = 0; i < 11; i++) {
    console.log(i)
}*/

function pricePizza(size) {
    const largePizza = 17
    const smallPizza = 13
    return pizzareturn = (size == 'large') ? largePizza : (size == 'small') ? smallPizza : null
}
console.log(pricePizza('large'))

/*let x = 3;
function checkScope() {
    console.log('function check')
    let y = 4;
    console.log(y);
    try {
        console.log(x)
    } catch (error) {
        console.log('out of scope')
    }
    console.log('______________')
}

checkScope()
console.log('global')
console.log(x)
try {
    console.log(y)
} catch (error) {
    console.log('out of scope')
}*/