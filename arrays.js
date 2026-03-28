let names = ['Kevin', 'Collin', 'James', 'Kaden']
names.push('Mr. Gorton')
//console.log(`The second value in the array is: ${names[1]}.`)

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

// for (let name of names) {
//     console.log(name)
// }
console.log()
names.sort()

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

names[names.indexOf('James')] = 'betterKaden'
console.log(names)