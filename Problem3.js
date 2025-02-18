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

console.log(willSuccess([65, 56, 25, 75, 35, 11]))