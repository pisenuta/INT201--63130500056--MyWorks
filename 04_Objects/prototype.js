let o = {}; // o inherits object methods from Object.prototype
o.x = 1; // and it now has an own property x.
let p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y.
let q = Object.create(p); // q inherits properties from p, o, and Object.prototype
q.z = 3; // and has an own property z.
console.log(p); // y = 2
console.log(p.x); // x = 1