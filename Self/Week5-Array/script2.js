let products = [
    {id: 1, price: 10},
    {id: 2, price: 5}
];
console.log(products);
let newProduct = {id: 3, price: 20}; // เพิ่มท้ายเร็วสุด
//... 1) spread operator
//products = [...products , newProduct];
//products = [...products, {...newProduct}]; // use this
//หรือใช้แบบนี้ easy กว่า -> deep copy (ตัดออกจากโรงภายนอก)ต้องมีชั้นเดียว ตราบใดที่มี type oj ให้ไปแกะมันออก
products = [...products, {id: newProduct.id, price: newProduct.price}]; //oj products เปลี่ยนมาชี้ที่นี่ address ใหม่

// shallow copy -> copy memory address ชี้ตัวเดิม ดังนั้นจึงเปลี่ยนราคา newProduct ได้ เพราะยังไม่ตัดจากข้างนอก
newProduct.price = 100;
console.log(products);
 

//... 2) rest parameter
function getStudent(instructor, ta, ...students){
    return students;
}
let studentSec2 = getStudent("Umaporn", "Toei", "a", "b", "c");
console.log(studentSec2);

[instructor, ta, ...students] = ["Umaporn", "Toei", "a", "b", "c"];
console.log(student);