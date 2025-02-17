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



/*function signature/sample */
function  validContact( contact ) {
    if(typeof contact === 'string' && contact.startsWith('01') && contact.length === 11){
        return true;
    }
    else if(typeof contact !== 'string'){
        const invalidMesssage = 'Invalid'
        return invalidMesssage;
    }
    else {
        return false
    }
}
console.log(validContact('01633585251'))