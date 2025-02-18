function calculateVAT( price ) {
    if(typeof price === 'number' && price > 0){
        let vat = price * (7.5 / 100);
        let productPrice = vat + price;
        return productPrice;
    }
    else {
        const invalidMesssage = 'Invalid';
        return invalidMesssage;
    }
}




function  validContact( contact ) {
    if (typeof contact === 'string' && contact.startsWith('01') && contact.length === 11 && !contact.includes(' ')){
        return true;
    }

    else if (typeof contact !== 'string'){
        const invalidMesssage = 'Invalid';
        return invalidMesssage;
    }

    else {
        return false;
    }
}



function  willSuccess( marks ) {
    let passMark = 0;
    let failMark = 0;

    if(!Array.isArray(marks)){
        const invalidMesssage = 'Invalid';
        return invalidMesssage;
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



function  validProposal( person1 , person2 ) {

    if (typeof person1 !== 'object'  || typeof person2 !== 'object') {
        const invalidMesssage = 'Invalid';
        return invalidMesssage;
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



function  calculateSleepTime( times ) {

    if(!Array.isArray(times)){
        const invalidMesssage = 'Invalid';
        return invalidMesssage;
        
    }

    for(let i = 0; i < times.length; i++){
      if(typeof times[i] !== 'number'){
        const invalidMesssage = 'Invalid';
        return invalidMesssage;
      }
    }

    let totalSecond = 0;
    for(let second of times){
        totalSecond = totalSecond + second;
    }

    let count = 60;

    let hour = totalSecond / (count * count)
    let hourFlr = Math.floor(hour);

    let minute = totalSecond % (count * count);
    let minuteRemaining = Math.floor(minute / count);

    let secondRemaining = totalSecond % count;

    let finalOutput = {
        hour: hourFlr,
        minute: minuteRemaining,
        second: secondRemaining
    };

    return finalOutput;
}
