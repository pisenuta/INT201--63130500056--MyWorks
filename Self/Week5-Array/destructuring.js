let a,b,rest;
[a,b] = [5,10];
console.log(a); //5
console.log(b); //10
[a,b,...rest] = [5,10,15,20,25];
console.log(rest); //[15,20,25]

//---------------------------------
({a,b} = {a:10,b:20});
console.log(a);//10
console.log(b);//20
({a,b,...rest} = {a: true, b: 20, c: 30, d: 40});
console.log(a);//10
console.log(b);//20
console.log(typeof a);
console.log(typeof b);
console.log(rest);//{c:30,d:40}