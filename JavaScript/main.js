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


//for loop
for (let i = 0; i < 10; i++){
    console.log('for loop number for this iteration is :'+i);
}

//while loop
let i = 0
while(i<10){
    console.log(i);
    i++;
}

//looping in arry
/*for (let persons of person) {
    console.log(persons.address);
}*/

//above one not working

//forEach,map,filter
//these are high order array methods
const todos = [
    {
        id: 1,
        text:'meeting1',
        isCompleted: true
    },
    {
        id: 2,
        text:'meeting2',
        isCompleted: false
    },
    {
        id: 3,
        text:'meeting3',
        isCompleted: true
    }
];

todos.forEach(function (todo) {
    console.log(todo.text);
});

//using map returns an array
const todoText = todos.map(function (todo) { 
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function (todo) { 
    return todo.isCompleted===true;
}).map(function (todo) {
    return todo.text; //this retiurn the array of the task that are completed because
    //we gave the condition in isCompleted===true so!!
    //VVVV.IMP: JS IS FUNCTIONAL PROGRAMMING LANG.
});

console.log(todoCompleted);

//conditionals
const x = 10;
const y='10'
if (x == y) {
    console.log('x is y')
}//double equal doesnot compare the datatyes like it will string 10=int 10

if (x === y) {
    console.log('x is 10')
} else {
    console.log('not true')
}
