//primitive variables
let num1 = 20;
let num2 = 10;
num2 = num1;

console.log(num1 == num2); //10==20
num2 = 55;
console.log(num1);

//Object variables
let per1 = { id: 1, name: 'Pichaya' };
let per2 = { id: 1, name: 'Pichaya' };
per2 = per1; //memory addree that points to its properties //FFEE

console.log(per1 == per2); //true, compare memory address
per2.name = 'Thiti';
console.log(per1.name); //Thiti

//----------------------------------------
//ARRAY
//a1 and a2 are oj variable cuz array in js are oj
let arr1 = [0,2,4,6];
let arr2 = [0,2,4,6];

console.log(arr1 == arr2); //false
arr2 = arr1;
arr2[1] = 5;
console.log(arr1[1]); //5
console.log(arr1); //[ 0, 5, 4, 6 ]
console.log(arr2); //[ 0, 5, 4, 6 ]
//มีขยะ คือตัวที่ arr2 เคยชี้ [0, 2, 4, 6]

//------------------------------------------
function doSomething(value){ 
//value(formal parameter) = item1 (actyal parameter) ให้ memory addres
    value.name = "unknown";
}

let item1 = {name: 'ABC'}; //oj
doSomething(item1);
console.log(item1.name);
/*unknown เพราะ function doSomething set ค่า name ของตัวในพารามิเตอร์ (item1) ให้ name เปน unknown*/

//---------------------------------------------
function doSomething2(value){ 
//value = isNum , primitive พอส่งไปแก้ไขตัว value ใน doSomething มันก็เปลี่ยนแค่ value
//คนละตัวแปรจรื้อ
    value = 100;
}
let isNum = true;
doSomething2(isNum);
console.log(isNum);//true
