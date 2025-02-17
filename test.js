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
// console.log(calculateVAT(34636))



/*function signature/sample */
function  validContact( contact ) {
    if (typeof contact === 'string' && contact.startsWith('01') && contact.length === 11 && !contact.includes(' ')){
        return true;
    }

    else if (typeof contact !== 'string'){
        const invalidMesssage = 'Invalid'
        return invalidMesssage;
    }

    else {
        return false;
    }
}
// console.log(validContact('01633585278'))


/*function signature/sample */
function  willSuccess( marks ) {
    let passMark = 0;
    let failMark = 0;

    if(!Array.isArray(marks)){
        const invalidMesssage = 'Invalid'
        return invalidMesssage
    }
    for(let mark of marks){
        if (mark >= 50 ){
           passMark++;
            
        } 
        else {
            failMark++;
        }
    }

    if(passMark > failMark){
        return true;
    }
    else{
        return false;
    }
}

// console.log(willSuccess([80, 0, 10, 74, 80, 45, 32, 23]))


/*function signature/sample */
function  validProposal( person1 , person2 ) {

    if (typeof person1 !== 'object'  || typeof person2 !== 'object') {
        return 'Invalid';
    }

    let age1 = person1.age;
    let age2 = person2.age;
    if(person1.gender !== person2.gender && Math.abs(age1 - age2) <= 7){
       return true;
    }
    else {
        return false;
    }
   
}

const person1 = { name: "Rahul", gender: "male", age: 28 }
const person2 = { name: "Joya", gender: "female", age: 22 }
// console.log(validProposal(person1, person2))