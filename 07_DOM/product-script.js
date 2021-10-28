//query
const divProductsEle = document.querySelector('#products');
console.log(divProductEle);

/*<div id='P001'>
    <p>product id: P001</p>
    <p>product name: iPhone 13</p>
    <p>price: 29900 Bath</p>
    <p>stock: </p>
</div>
*/

let product = {
    productId: 'P001',
    productName: 'iPhone 13',
    price: 29900
};

//1. create div element
//1. <div></div>
const divProductEle = document.createElement('div');

//2. create id attribute on div element
//2. <div id='P001'
divProductEle.setAttribute('id', product.productId);

//3. create <p> for product id
//3. <div id='P001'><p>P001</p><div>
const pProductIdEle = document.createElement('p');
pProductIdEle.textContent = product.productId;
// divProductEle = parent
divProductEle.appendChild(pProductIdEle); // เอา div ครอบ


//4. create <p> for product name
//4. <p>iPhone 13</p>
const pProductNameEle = document.createElement('p');
pProductNameEle.textContent = product.productName;
// <div id='P001'><p>iPhone 13</p></div>
divProductEle.appendChild(pProductNameEle);

//5. create <p> for price
//5. <p>29900 Bath</p>
const pProductPriceEle = document.createElement('p');
pProductPriceEle.textContent = product.price + 'Bath';
// <div id='P001'><p>29900 Bath</p></div>
divProductEle.appendChild(pProductPriceEle);

//6. add product element to products element
divProductsEle.appendChild(divProductEle);