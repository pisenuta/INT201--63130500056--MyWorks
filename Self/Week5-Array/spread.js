//include object variable in array with spread operatter
let per1 = [{id: 1, name: 'Adam'}]; // copy address cuz it is oj
let arr1 = [...per1];

arr1[0].name = 'Joe'; //same address
console.log(per1);

//include primitive variable in array with spread operatter
let num = [10]; // copy value
let arr2 = [...num];

arr2[0] = 20;
console.log(num);