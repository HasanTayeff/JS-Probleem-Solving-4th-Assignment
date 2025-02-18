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
const person2 = { name: "Joya", gender: "female", age: 29 }

console.log(validProposal(person1, person2))