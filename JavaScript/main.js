//arrays- variables that hold multiple values
const fruits = ["apples", 'oranges', 'pears','true']
console.log(fruits);

//accesing the element in the array
console.log(fruits[1]);
//adding values
fruits[4] = 'grapes';
//push method-appends on the end
fruits.push('strawberries');
console.log(fruits);

//unshift: to add to the beggining
fruits.unshift('aaloo');

//to check if array?
console.log(Array.isArray('hello'));

//index
console.log(fruits.indexOf('grapes'));

//OBJECT LITERALS

const person = {
    firstName: 'John',
    lastNAme: 'suri',
    age: 30,
    hobbies: ['music', 'painting', 'drawing'],
    address:{
        number:'plot no 118',
        city: 'pune',
        state: 'Maharashtra'
    }
}

console.log(person);
console.log(person.firstName, person.address);

//to print movies in console
console.log(person.address.city);

person.email = 'aditi.sharma';
console.log(person.email);
