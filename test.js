/*function signature/sample */
function calculateVAT( price ) {
    if(typeof price === 'number' && price >= 0){
        let vat = price * (7.5 / 100);
        let productPrice = vat + price
        return productPrice;
    }
    else {
        const invalidMesssage = 'Invalid'
        return invalidMesssage;
    }
}
console.log(calculateVAT(3463))