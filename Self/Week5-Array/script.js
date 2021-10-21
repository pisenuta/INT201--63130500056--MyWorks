let arr1 = []; //array
let obj = {}; //object
console.log(typeof arr1); // type is obj
console.log(arr1.length); // 0
arr1 =[10, true,1, "unknown", ['A', 'B', 'C'], {id:1,name:'NongPleng'}] // array is untyped
console.log(arr1[2]); // unknown
console.log(arr1[arr1.length - 1]); // [ 'A', 'B', 'C' ]
console.log(arr1 [arr1 [2] ] ); // true [integer expression]
console.log(arr1[4][arr1[4].length - 1]); // access 'C'
console.log(arr1[5].name); // access name property 'NongPleng'

//กำหนดค่า
arr1[4][0] = 'X'; // เข้าไปที่มิติที่สอง
console.log(arr1[4]);

arr1[0] = 20;
console.log(arr1);

//----------------------------------------------------------
//spread operator
arr2 = ['confirm', ...arr1];
console.log(arr2);

let arr3 = "hello world";
let arr4 = [...arr3]; // แตก string
console.log(arr4);
console.log(arr4.length);
