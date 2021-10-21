let VAT = 0.07; // global variable

function priceWithVat(price){ // global funct. / outer funt.
    //price is a local scope
    // header is a local scope
    let header = 'SIT, Kmutt';

    //taff is a nested(inner) funct. สามารถอ้าง local ของตัวเองได้และอ้างของ outer ได้
    function staff(name){
        let staffName = name;
        return header + staffName;
    }
    return price * VAT + price;
}
console.log(header);
console.log(priceWithVat(100));

//--------------------------------------------------------
let VAT = 0.07
//non-pure funt.
function priceWithVat(price){
    return price * VAT + price;
}
//pure funt.
function getPrice(price){
    return price;
}
console.log(priceWithVat(100)); //107
VAT = 0.1;
console.log(priceWithVat(100)); //110