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

console.log(calculateSleepTime([23, 67, 25]))