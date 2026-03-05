let numRangeLow = 1;
let numRangeHigh = 1000;
let numFizz = 0;
let numBuzz = 0;
let numFizzBuzz = 0;
let fizz = 'fizz';
let buzz = 'buzz';
let i = 0;


//initial solution
/*for (let i = numRangeLow; i <= numRangeHigh; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + ' ' + fizz + ' ' + buzz);
        numFizzBuzz += 1;
    } else if (i % 3 == 0) {
        console.log(i + ' ' + fizz);
        numFizz += 1;
    } else if (i % 5 == 0) {
        console.log(i + ' ' + buzz);
        numBuzz += 1;
    } else {
        console.log(i);
    }
    console.log('There were ' + numFizz + ' fizz\'s, ' + numBuzz + ' buzz\'s, and ' + numFizzBuzz + ' fizz buzz\'s out of ' + (numRangeHigh - numRangeLow));
}*/


//running until there are 1323 Fizz Buzzes
while (numFizzBuzz < 1323) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + ' ' + fizz + ' ' + buzz);
        numFizzBuzz += 1;
    } else if (i % 3 == 0) {
        console.log(i + ' ' + fizz);
        numFizz += 1;
    } else if (i % 5 == 0) {
        console.log(i + ' ' + buzz);
        numBuzz += 1;
    } else {
        console.log(i);
    }
    i += 1;
}

console.log('There were ' + numFizz + ' fizz\'s, ' + numBuzz + ' buzz\'s in 1323 fizz buzz\'s, which took ' + i + ' numbers to reach.')