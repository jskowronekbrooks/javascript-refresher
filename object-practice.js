const student1 = {
    firstName: 'Sue',
    lastName: 'Smith',
    gpa: 3.6,
    playsVolleyball: true
}

console.log(`I know ${student1.firstName} ${student1.lastName}!`)

console.log(`She ${(student1.playsVolleyball == true) ? 'is' : 'is not'} on the volleyball team`)

const student2 = {
    firstName: 'Bob',
    lastName: 'Loblaw',
    gpa: 2.1,
    playsVolleyball: false
}

let students = [student1]
students.push(student2)

students.push({firstName: 'Nedak', gpa: 4.8})
students[2].lastName = 'zeramla'
students[2].occupation = 'plumber'

console.table(students)