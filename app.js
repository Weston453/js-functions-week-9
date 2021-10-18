function setupCounter( val ) {
    return function counter() {
        return val++
    }
}
let counter1 = setupCounter(0)
console.log(counter1())
console.log(counter1())
let counter2 = setupCounter(10)
console.log(counter2())


// 1 line Arrow Function
let sum = (num1, num2) => num1 + num2

let output = sum(10, 5)
console.log(output)


// This KeyWord
let message = {
    name: 'John',
    regularFunction: function() {
        console.log(this)
        console.log('Hello ' + this.name)
    },
    arrowFunction: () => console.log('Hi ' + this.name)
}
message.regularFunction()
message.arrowFunction()


// Changing Function Context and Built-in Functions
// Call() Method
let person1 = {name: 'John', age: 22}
let person2 = {name: 'Mary', age: 26}

let sayHi = function(){
    console.log('Hi, ' + this.name)
}

sayHi.call(person1)
sayHi.call(person2)

// Apply() Method
function introduction(name, profession){
    console.log('My name is ' + name + ' and I am a ' + profession + '.')
    console.log(this)
}
introduction('John', 'student')
introduction.apply(undefined, ['Mary', 'Lawyer'])
introduction.call(undefined, 'James', 'artist')

// Bind() Method
let personA = {name: 'Mary',
    getName: function(){
        return this.name
    }
}
let personB = {
    name: 'John'
}

let getNameCopy = personA.getName.bind(personB)
console.log(getNameCopy)

// Bilt in JS Functions
//eval
let x = 1
let y = 2
let s = 'abc'
console.log(eval('x + y + s')) 

console.log(parseInt("F", 16))
console.log(parseInt("15", 10))
console.log(parseInt("Hi", 10))

console.log(parseFloat(3.99))
console.log(parseFloat(399))
console.log(parseFloat('x'))

//Default Parameter
function sayHi2(message, name = 'World') {
    console.log(message + ' ' + name)
}

sayHi2("Hello")
sayHi2("Hi", "John")

//Rest Parameter
function greet(message, ...names) {
    console.log(message + ' everyone!')
    names.forEach(name => console.log('Hi ' + name))
}
greet('Welcome', 'Mary', 'John', 'James')

//Spread Operator
function greet2(person1, person2) {
    console.log('Hello ' + person1 + ' and ' + person2)
}
let names = ['John', 'Mary']
greet2(...names)

function display(char1, char2, char3, char4, ...others) {
    console.log(others)
    console.log(char1, char2, char3, char4)
}
let letters = 'abcdefghi'
display(...letters)