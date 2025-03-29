function calculateVAT( price ) {
    if(typeof price === 'number' && price > 0){
        let vat = price * (7.5 / 100);
        return vat;
    }
    else {
        const invalidMesssage = 'Invalid'
        return invalidMesssage;
    }
}
console.log(calculateVAT(100))