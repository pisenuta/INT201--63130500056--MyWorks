let greeting = 'Welocome everyone on family'
function outer(name){
    //higher order function
    let family = [];
    family.unshift(name);

    //inner is a closure funct.
    function inner(newMember){ // เรียก inner ชื่อ fam จะถูกเก็บไปเรื่อยๆ ไม่ถูกทำลาย
        console.log(greeting);
        family.unshift(newMember);
        return family;
    }
    return inner; // return inner funct.
}

const myInner = outer('Thanyakorn');
console.log(myInner('John'));
console.log(myInner('SuSan'));