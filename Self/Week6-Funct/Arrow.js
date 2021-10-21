//Arrow funt.
//1.
const myFunc = function(instructor, ta, ...students){
    let greeting = 'hello';
    return students;
};

const myFunc = (instructor,ta, ...student) => {let a = 0;
                                                return student};

console.log(myFunc(1,2,3));
//2.
function echo(text) {
    return text;
}

const echo = text => text;

//3.
function sayHi(greeting, name){
    return `${greeting}, ${name}`;
}

const sayHi = (greeting,name) => `${greeting},${name}`;

//4.
function getClass(){
    return `INT201`;
}

const getClass = () => `INT201`

//-----------------------------------------------
console.log(sayHi('hey','pleng'));