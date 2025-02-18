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
console.log(validContact(0163358278))